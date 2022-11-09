import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MoreHoursType } from "./morehourstype";
import { ServiceType } from "./servicetype";


// Category
/** 
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
**/
export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=moreHoursTypes", elemType: shared.MoreHoursType })
  moreHoursTypes?: MoreHoursType[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceTypes", elemType: shared.ServiceType })
  serviceTypes?: ServiceType[];
}

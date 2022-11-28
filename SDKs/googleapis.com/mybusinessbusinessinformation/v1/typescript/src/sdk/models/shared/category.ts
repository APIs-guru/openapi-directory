import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MoreHoursType } from "./morehourstype";
import { ServiceType } from "./servicetype";



// CategoryInput
/** 
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
**/
export class CategoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// Category
/** 
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
**/
export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=moreHoursTypes", elemType: MoreHoursType })
  moreHoursTypes?: MoreHoursType[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceTypes", elemType: ServiceType })
  serviceTypes?: ServiceType[];
}

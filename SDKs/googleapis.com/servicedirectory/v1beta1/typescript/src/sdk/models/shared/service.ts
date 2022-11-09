import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Endpoint } from "./endpoint";


// Service
/** 
 * An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
**/
export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=endpoints", elemType: shared.Endpoint })
  endpoints?: Endpoint[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

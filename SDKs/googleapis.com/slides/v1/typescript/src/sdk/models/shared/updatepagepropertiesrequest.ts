import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PageProperties } from "./pageproperties";


// UpdatePagePropertiesRequest
/** 
 * Updates the properties of a Page.
**/
export class UpdatePagePropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=pageProperties" })
  pageProperties?: PageProperties;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageProperties } from "./pageproperties";



// UpdatePagePropertiesRequest
/** 
 * Updates the properties of a Page.
**/
export class UpdatePagePropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=pageProperties" })
  pageProperties?: PageProperties;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineProperties } from "./lineproperties";



// UpdateLinePropertiesRequest
/** 
 * Updates the properties of a Line.
**/
export class UpdateLinePropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=lineProperties" })
  lineProperties?: LineProperties;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}

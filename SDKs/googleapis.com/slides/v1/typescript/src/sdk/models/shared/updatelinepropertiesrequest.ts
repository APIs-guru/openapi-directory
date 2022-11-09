import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LineProperties } from "./lineproperties";


// UpdateLinePropertiesRequest
/** 
 * Updates the properties of a Line.
**/
export class UpdateLinePropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=lineProperties" })
  lineProperties?: LineProperties;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShapeProperties } from "./shapeproperties";


// UpdateShapePropertiesRequest
/** 
 * Update the properties of a Shape.
**/
export class UpdateShapePropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=shapeProperties" })
  shapeProperties?: ShapeProperties;
}

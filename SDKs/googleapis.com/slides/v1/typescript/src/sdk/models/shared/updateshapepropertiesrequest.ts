import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShapeProperties } from "./shapeproperties";



// UpdateShapePropertiesRequest
/** 
 * Update the properties of a Shape.
**/
export class UpdateShapePropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=shapeProperties" })
  shapeProperties?: ShapeProperties;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ShapeProperties } from "./shapeproperties";
/**
 * Update the properties of a Shape.
**/
export declare class UpdateShapePropertiesRequest extends SpeakeasyBase {
    fields?: string;
    objectId?: string;
    shapeProperties?: ShapeProperties;
}

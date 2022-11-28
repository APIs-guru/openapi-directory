import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";
import { SlicerSpec } from "./slicerspec";
/**
 * A slicer in a sheet.
**/
export declare class Slicer extends SpeakeasyBase {
    position?: EmbeddedObjectPosition;
    slicerId?: number;
    spec?: SlicerSpec;
}

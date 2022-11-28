import { SpeakeasyBase } from "../../../internal/utils";
import { SlicerSpec } from "./slicerspec";
/**
 * Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.
**/
export declare class UpdateSlicerSpecRequest extends SpeakeasyBase {
    fields?: string;
    slicerId?: number;
    spec?: SlicerSpec;
}

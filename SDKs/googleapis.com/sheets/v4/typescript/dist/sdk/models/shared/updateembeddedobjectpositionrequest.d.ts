import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";
/**
 * Update an embedded object's position (such as a moving or resizing a chart or image).
**/
export declare class UpdateEmbeddedObjectPositionRequest extends SpeakeasyBase {
    fields?: string;
    newPosition?: EmbeddedObjectPosition;
    objectId?: number;
}

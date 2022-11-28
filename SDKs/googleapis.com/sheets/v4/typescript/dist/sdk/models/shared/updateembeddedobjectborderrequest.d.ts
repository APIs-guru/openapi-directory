import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";
/**
 * Updates an embedded object's border property.
**/
export declare class UpdateEmbeddedObjectBorderRequest extends SpeakeasyBase {
    border?: EmbeddedObjectBorder;
    fields?: string;
    objectId?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";
/**
 * The desired input location and metadata.
**/
export declare class InputConfig extends SpeakeasyBase {
    content?: string;
    gcsSource?: GcsSource;
    mimeType?: string;
}

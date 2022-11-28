import { SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";
/**
 * Input configuration for BatchTranslateText request.
**/
export declare class InputConfig extends SpeakeasyBase {
    gcsSource?: GcsSource;
    mimeType?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";
/**
 * A document translation request input config.
**/
export declare class DocumentInputConfig extends SpeakeasyBase {
    content?: string;
    gcsSource?: GcsSource;
    mimeType?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";
/**
 * A document translation request output config.
**/
export declare class DocumentOutputConfig extends SpeakeasyBase {
    gcsDestination?: GcsDestination;
    mimeType?: string;
}

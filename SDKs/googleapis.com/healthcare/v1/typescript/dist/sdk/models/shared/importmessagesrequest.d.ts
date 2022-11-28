import { SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";
/**
 * Request to import messages.
**/
export declare class ImportMessagesRequest extends SpeakeasyBase {
    gcsSource?: GcsSource;
}

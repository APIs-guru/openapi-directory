import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * A single statement to check in a bulk call using BulkCheck. See CheckRequest for details about each field.
**/
export declare class StatementTemplate extends SpeakeasyBase {
    relation?: string;
    source?: Asset;
    target?: Asset;
}

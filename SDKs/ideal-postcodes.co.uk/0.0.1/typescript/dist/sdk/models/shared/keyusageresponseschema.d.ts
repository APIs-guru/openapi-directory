import { SpeakeasyBase } from "../../../internal/utils";
import { KeyUsageResult } from "./keyusageresult";
export declare class KeyUsageResponseSchema extends SpeakeasyBase {
    code?: number;
    message?: string;
    result?: KeyUsageResult;
}

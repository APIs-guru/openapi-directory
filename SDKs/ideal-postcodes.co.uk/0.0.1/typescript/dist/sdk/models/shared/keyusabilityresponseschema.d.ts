import { SpeakeasyBase } from "../../../internal/utils";
import { KeyUsabilityResult } from "./keyusabilityresult";
export declare class KeyUsabilityResponseSchema extends SpeakeasyBase {
    code?: number;
    message?: string;
    result?: KeyUsabilityResult;
}

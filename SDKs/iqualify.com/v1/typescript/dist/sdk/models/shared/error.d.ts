import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorError extends SpeakeasyBase {
    details?: string;
    name?: string;
}
export declare class Error extends SpeakeasyBase {
    error?: ErrorError;
}

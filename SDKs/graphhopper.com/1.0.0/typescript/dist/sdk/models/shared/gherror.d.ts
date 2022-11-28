import { SpeakeasyBase } from "../../../internal/utils";
export declare class GhErrorHints extends SpeakeasyBase {
    message?: string;
}
export declare class GhError extends SpeakeasyBase {
    hints?: GhErrorHints[];
    message?: string;
}

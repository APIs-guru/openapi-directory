import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorDetail extends SpeakeasyBase {
    code?: string;
    context?: Map<string, string[]>;
    in?: string;
    message: string;
    subCategory?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
export declare class Error extends SpeakeasyBase {
    category: string;
    context?: Map<string, string[]>;
    correlationId: string;
    errors?: ErrorDetail[];
    links?: Map<string, string>;
    message: string;
    subCategory?: string;
}

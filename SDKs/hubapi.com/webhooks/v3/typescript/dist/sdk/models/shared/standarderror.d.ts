import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCategory } from "./errorcategory";
import { ErrorDetail } from "./errordetail";
export declare class StandardError extends SpeakeasyBase {
    category: ErrorCategory;
    context: Map<string, string[]>;
    errors: ErrorDetail[];
    id?: string;
    links: Map<string, string>;
    message: string;
    status: string;
    subCategory?: Map<string, any>;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An audit's result object in a Lighthouse result.
**/
export declare class LighthouseAuditResultV5 extends SpeakeasyBase {
    description?: string;
    details?: Map<string, any>;
    displayValue?: string;
    errorMessage?: string;
    explanation?: string;
    id?: string;
    numericUnit?: string;
    numericValue?: number;
    score?: any;
    scoreDisplayMode?: string;
    title?: string;
    warnings?: any;
}

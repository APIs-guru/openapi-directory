import { SpeakeasyBase } from "../../../internal/utils";
import { ConversionStatus } from "./conversionstatus";
/**
 * Update Conversions Response.
**/
export declare class ConversionsBatchUpdateResponse extends SpeakeasyBase {
    hasFailures?: boolean;
    kind?: string;
    status?: ConversionStatus[];
}

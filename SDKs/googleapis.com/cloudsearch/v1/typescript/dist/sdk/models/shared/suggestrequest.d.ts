import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceRestriction } from "./datasourcerestriction";
import { RequestOptions } from "./requestoptions";
/**
 * Request of suggest API.
**/
export declare class SuggestRequest extends SpeakeasyBase {
    dataSourceRestrictions?: DataSourceRestriction[];
    query?: string;
    requestOptions?: RequestOptions;
}

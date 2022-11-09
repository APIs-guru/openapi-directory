import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumberInsightAdvancedPathParams extends SpeakeasyBase {
    format: shared.FormatEnum;
}
export declare class GetNumberInsightAdvancedQueryParams extends SpeakeasyBase {
    cnam?: boolean;
    country?: string;
    ip?: string;
    number: string;
    realTimeData?: boolean;
}
export declare class GetNumberInsightAdvancedRequest extends SpeakeasyBase {
    pathParams: GetNumberInsightAdvancedPathParams;
    queryParams: GetNumberInsightAdvancedQueryParams;
}
export declare class GetNumberInsightAdvancedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getNumberInsightAdvanced200ApplicationJsonOneOf?: any;
}

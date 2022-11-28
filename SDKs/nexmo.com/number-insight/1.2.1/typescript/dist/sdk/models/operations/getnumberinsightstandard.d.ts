import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumberInsightStandardPathParams extends SpeakeasyBase {
    format: shared.FormatEnum;
}
export declare class GetNumberInsightStandardQueryParams extends SpeakeasyBase {
    cnam?: boolean;
    country?: string;
    number: string;
}
export declare class GetNumberInsightStandardRequest extends SpeakeasyBase {
    pathParams: GetNumberInsightStandardPathParams;
    queryParams: GetNumberInsightStandardQueryParams;
}
export declare class GetNumberInsightStandardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getNumberInsightStandard200ApplicationJsonOneOf?: any;
}

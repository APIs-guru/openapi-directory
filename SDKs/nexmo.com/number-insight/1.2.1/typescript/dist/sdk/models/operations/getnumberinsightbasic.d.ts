import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumberInsightBasicPathParams extends SpeakeasyBase {
    format: shared.FormatEnum;
}
export declare class GetNumberInsightBasicQueryParams extends SpeakeasyBase {
    country?: string;
    number: string;
}
export declare class GetNumberInsightBasicRequest extends SpeakeasyBase {
    pathParams: GetNumberInsightBasicPathParams;
    queryParams: GetNumberInsightBasicQueryParams;
}
export declare class GetNumberInsightBasicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    niResponseJsonBasic?: shared.NiResponseJsonBasic;
}

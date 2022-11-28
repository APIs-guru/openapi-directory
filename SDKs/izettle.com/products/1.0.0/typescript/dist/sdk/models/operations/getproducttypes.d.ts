import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductTypesPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetProductTypesSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetProductTypesRequest extends SpeakeasyBase {
    pathParams: GetProductTypesPathParams;
    security: GetProductTypesSecurity;
}
export declare class GetProductTypesResponse extends SpeakeasyBase {
    categoryResponse?: shared.CategoryResponse;
    contentType: string;
    statusCode: number;
}

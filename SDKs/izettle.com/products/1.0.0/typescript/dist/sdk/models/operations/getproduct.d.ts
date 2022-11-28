import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductPathParams extends SpeakeasyBase {
    organizationUuid: string;
    productUuid: string;
}
export declare class GetProductHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetProductSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetProductRequest extends SpeakeasyBase {
    pathParams: GetProductPathParams;
    headers: GetProductHeaders;
    security: GetProductSecurity;
}
export declare class GetProductResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    productResponse?: shared.ProductResponse;
    statusCode: number;
}

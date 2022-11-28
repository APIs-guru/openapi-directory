import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllProductsV2PathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetAllProductsV2QueryParams extends SpeakeasyBase {
    sort?: boolean;
}
export declare class GetAllProductsV2Security extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetAllProductsV2Request extends SpeakeasyBase {
    pathParams: GetAllProductsV2PathParams;
    queryParams: GetAllProductsV2QueryParams;
    security: GetAllProductsV2Security;
}
export declare class GetAllProductsV2Response extends SpeakeasyBase {
    contentType: string;
    productResponses?: shared.ProductResponse[];
    statusCode: number;
}

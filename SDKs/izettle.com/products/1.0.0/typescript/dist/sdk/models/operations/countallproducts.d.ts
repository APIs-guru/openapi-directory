import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CountAllProductsPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class CountAllProductsSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class CountAllProductsRequest extends SpeakeasyBase {
    pathParams: CountAllProductsPathParams;
    security: CountAllProductsSecurity;
}
export declare class CountAllProductsResponse extends SpeakeasyBase {
    contentType: string;
    productCountResponses?: shared.ProductCountResponse[];
    statusCode: number;
}

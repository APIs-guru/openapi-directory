import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllProductsInPosPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetAllProductsInPosSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetAllProductsInPosRequest extends SpeakeasyBase {
    pathParams: GetAllProductsInPosPathParams;
    security: GetAllProductsInPosSecurity;
}
export declare class GetAllProductsInPosResponse extends SpeakeasyBase {
    contentType: string;
    productResponses?: shared.ProductResponse[];
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProductPathParams extends SpeakeasyBase {
    organizationUuid: string;
    productUuid: string;
}
export declare class DeleteProductSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class DeleteProductRequest extends SpeakeasyBase {
    pathParams: DeleteProductPathParams;
    security: DeleteProductSecurity;
}
export declare class DeleteProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

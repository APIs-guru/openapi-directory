import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProductsPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class DeleteProductsQueryParams extends SpeakeasyBase {
    uuid: string[];
}
export declare class DeleteProductsSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class DeleteProductsRequest extends SpeakeasyBase {
    pathParams: DeleteProductsPathParams;
    queryParams: DeleteProductsQueryParams;
    security: DeleteProductsSecurity;
}
export declare class DeleteProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

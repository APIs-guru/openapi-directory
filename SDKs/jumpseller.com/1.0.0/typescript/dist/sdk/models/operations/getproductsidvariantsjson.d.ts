import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdVariantsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdVariantsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdVariantsJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdVariantsJsonPathParams;
    queryParams: GetProductsIdVariantsJsonQueryParams;
}
export declare class GetProductsIdVariantsJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    statusCode: number;
    variants?: shared.Variant[];
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProductsIdAttachmentsCountJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductsIdAttachmentsCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdAttachmentsCountJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdAttachmentsCountJsonPathParams;
    queryParams: GetProductsIdAttachmentsCountJsonQueryParams;
}
export declare class GetProductsIdAttachmentsCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    notFound?: any;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePromotionsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeletePromotionsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeletePromotionsIdJsonRequest extends SpeakeasyBase {
    pathParams: DeletePromotionsIdJsonPathParams;
    queryParams: DeletePromotionsIdJsonQueryParams;
}
export declare class DeletePromotionsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deletePromotionsIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}

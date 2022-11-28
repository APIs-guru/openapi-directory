import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteJsappsCodeJsonPathParams extends SpeakeasyBase {
    code: string;
}
export declare class DeleteJsappsCodeJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteJsappsCodeJsonRequest extends SpeakeasyBase {
    pathParams: DeleteJsappsCodeJsonPathParams;
    queryParams: DeleteJsappsCodeJsonQueryParams;
}
export declare class DeleteJsappsCodeJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteJsappsCodeJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}

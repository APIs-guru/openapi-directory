import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteHooksIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteHooksIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteHooksIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteHooksIdJsonPathParams;
    queryParams: DeleteHooksIdJsonQueryParams;
}
export declare class DeleteHooksIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteHooksIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}

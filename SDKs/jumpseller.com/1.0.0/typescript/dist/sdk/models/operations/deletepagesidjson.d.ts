import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePagesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeletePagesIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeletePagesIdJsonRequest extends SpeakeasyBase {
    pathParams: DeletePagesIdJsonPathParams;
    queryParams: DeletePagesIdJsonQueryParams;
}
export declare class DeletePagesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deletePagesIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}

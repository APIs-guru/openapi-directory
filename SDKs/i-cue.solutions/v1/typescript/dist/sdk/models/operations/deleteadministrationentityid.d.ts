import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAdministrationEntityIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteAdministrationEntityIdHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class DeleteAdministrationEntityIdRequest extends SpeakeasyBase {
    pathParams: DeleteAdministrationEntityIdPathParams;
    headers: DeleteAdministrationEntityIdHeaders;
}
export declare class DeleteAdministrationEntityIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAdministrationUserEntityIdIdPathParams extends SpeakeasyBase {
    entityId: number;
    id: number;
}
export declare class DeleteAdministrationUserEntityIdIdHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class DeleteAdministrationUserEntityIdIdRequest extends SpeakeasyBase {
    pathParams: DeleteAdministrationUserEntityIdIdPathParams;
    headers: DeleteAdministrationUserEntityIdIdHeaders;
}
export declare class DeleteAdministrationUserEntityIdIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

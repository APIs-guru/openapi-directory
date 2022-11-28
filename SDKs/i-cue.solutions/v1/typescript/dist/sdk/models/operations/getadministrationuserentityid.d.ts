import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdministrationUserEntityIdPathParams extends SpeakeasyBase {
    entityId: number;
}
export declare class GetAdministrationUserEntityIdHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class GetAdministrationUserEntityIdRequest extends SpeakeasyBase {
    pathParams: GetAdministrationUserEntityIdPathParams;
    headers: GetAdministrationUserEntityIdHeaders;
}
export declare class GetAdministrationUserEntityIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

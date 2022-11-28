import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstitutionsUsersListPathParams extends SpeakeasyBase {
    institutionId: string;
}
export declare class InstitutionsUsersListRequest extends SpeakeasyBase {
    pathParams: InstitutionsUsersListPathParams;
}
export declare class InstitutionsUsersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

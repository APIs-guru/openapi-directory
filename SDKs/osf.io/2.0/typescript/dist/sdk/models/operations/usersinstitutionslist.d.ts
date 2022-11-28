import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsersInstitutionsListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersInstitutionsListRequest extends SpeakeasyBase {
    pathParams: UsersInstitutionsListPathParams;
}
export declare class UsersInstitutionsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

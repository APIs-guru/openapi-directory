import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchUsersUserIdPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PatchUsersUserIdQueryParams extends SpeakeasyBase {
    customData?: string;
    email?: string;
    name?: string;
    type?: string;
    username?: string;
}
export declare class PatchUsersUserIdRequest extends SpeakeasyBase {
    pathParams: PatchUsersUserIdPathParams;
    queryParams: PatchUsersUserIdQueryParams;
}
export declare class PatchUsersUserIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

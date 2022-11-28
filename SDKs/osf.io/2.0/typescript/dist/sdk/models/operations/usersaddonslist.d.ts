import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsersAddonsListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersAddonsListRequest extends SpeakeasyBase {
    pathParams: UsersAddonsListPathParams;
}
export declare class UsersAddonsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

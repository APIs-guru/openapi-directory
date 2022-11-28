import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsersAddonsReadPathParams extends SpeakeasyBase {
    provider: string;
    userId: string;
}
export declare class UsersAddonsReadRequest extends SpeakeasyBase {
    pathParams: UsersAddonsReadPathParams;
}
export declare class UsersAddonsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsersReadPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersReadRequest extends SpeakeasyBase {
    pathParams: UsersReadPathParams;
}
export declare class UsersReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

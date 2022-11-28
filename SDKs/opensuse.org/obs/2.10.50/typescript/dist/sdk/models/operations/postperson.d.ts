import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPersonCmdEnum {
    Register = "register"
}
export declare class PostPersonQueryParams extends SpeakeasyBase {
    cmd: PostPersonCmdEnum;
}
export declare class PostPersonRequest extends SpeakeasyBase {
    queryParams: PostPersonQueryParams;
    request: Uint8Array;
}
export declare class PostPersonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

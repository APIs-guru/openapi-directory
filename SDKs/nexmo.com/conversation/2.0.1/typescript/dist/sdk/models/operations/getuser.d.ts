import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUserRequest extends SpeakeasyBase {
    pathParams: GetUserPathParams;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getUser200ApplicationJsonAny?: any;
}

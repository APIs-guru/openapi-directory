import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    pathParams: UpdateUserPathParams;
    request?: any;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateUser200ApplicationJsonAny?: any;
}

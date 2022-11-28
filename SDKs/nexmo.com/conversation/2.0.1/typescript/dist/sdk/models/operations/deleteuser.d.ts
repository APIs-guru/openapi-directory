import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    pathParams: DeleteUserPathParams;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteUser200ApplicationJsonObject?: Map<string, any>;
}

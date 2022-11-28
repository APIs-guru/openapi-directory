import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Create a Member in invite state
**/
export declare class CreateUserRequestBody extends SpeakeasyBase {
    displayName?: string;
    imageUrl?: string;
    name?: string;
}
export declare class CreateUser200ApplicationJson extends SpeakeasyBase {
    href?: string;
    id?: string;
}
export declare class CreateUserRequest extends SpeakeasyBase {
    request?: CreateUserRequestBody;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createUser200ApplicationJsonObject?: CreateUser200ApplicationJson;
}

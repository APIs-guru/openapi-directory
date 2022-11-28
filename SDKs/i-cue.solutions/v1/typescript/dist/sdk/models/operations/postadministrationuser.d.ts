import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAdministrationUserHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostAdministrationUserRequestsInput extends SpeakeasyBase {
    newUserRequest?: shared.NewUserRequestInput;
    newUserRequest1?: shared.NewUserRequestInput;
    newUserRequest2?: shared.NewUserRequestInput;
}
export declare class PostAdministrationUserRequest extends SpeakeasyBase {
    headers: PostAdministrationUserHeaders;
    request?: PostAdministrationUserRequestsInput;
}
export declare class PostAdministrationUserResponse extends SpeakeasyBase {
    contentType: string;
    postAdministrationUser200ApplicationJsonUuidString?: string;
    postAdministrationUser200TextJsonUuidString?: string;
    postAdministrationUser200TextPlainUuidString?: string;
    statusCode: number;
}

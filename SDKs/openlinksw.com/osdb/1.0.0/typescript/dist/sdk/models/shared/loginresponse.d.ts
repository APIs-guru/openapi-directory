import { SpeakeasyBase } from "../../../internal/utils";
export declare class LoginResponseResponse extends SpeakeasyBase {
    user: string;
}
export declare enum LoginResponseStatusEnum {
    Success = "success"
}
export declare class LoginResponse extends SpeakeasyBase {
    api: string;
    method: string;
    response: LoginResponseResponse;
    status: LoginResponseStatusEnum;
}

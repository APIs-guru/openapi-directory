import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoginResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    loginResponse?: shared.LoginResponse;
    statusCode: number;
}

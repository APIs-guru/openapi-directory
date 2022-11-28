import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LogoutResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    logoutResponse?: shared.LogoutResponse;
    statusCode: number;
}

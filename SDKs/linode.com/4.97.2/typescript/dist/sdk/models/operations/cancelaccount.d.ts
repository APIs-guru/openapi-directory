import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelAccountSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CancelAccount200ApplicationJson extends SpeakeasyBase {
    surveyLink?: string;
}
export declare class CancelAccount409ApplicationJsonErrors extends SpeakeasyBase {
    reason?: string;
}
export declare class CancelAccount409ApplicationJson extends SpeakeasyBase {
    errors?: CancelAccount409ApplicationJsonErrors[];
}
export declare class CancelAccountDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CancelAccountRequest extends SpeakeasyBase {
    request: any;
    security: CancelAccountSecurity;
}
export declare class CancelAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cancelAccount200ApplicationJsonObject?: CancelAccount200ApplicationJson;
    cancelAccount409ApplicationJsonObject?: CancelAccount409ApplicationJson;
    cancelAccountDefaultApplicationJsonObject?: CancelAccountDefaultApplicationJson;
}

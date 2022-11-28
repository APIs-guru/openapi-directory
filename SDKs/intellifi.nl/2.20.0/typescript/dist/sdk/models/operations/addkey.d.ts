import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddKeySecurity extends SpeakeasyBase {
    cookieSid: shared.SchemeCookieSid;
}
export declare class AddKeyRequest extends SpeakeasyBase {
    request: shared.KeyInput;
    security: AddKeySecurity;
}
export declare class AddKeyResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}

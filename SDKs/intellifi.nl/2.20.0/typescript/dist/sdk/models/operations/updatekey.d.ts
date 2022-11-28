import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateKeyPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateKeySecurity extends SpeakeasyBase {
    cookieSid: shared.SchemeCookieSid;
}
export declare class UpdateKeyRequest extends SpeakeasyBase {
    pathParams: UpdateKeyPathParams;
    request: shared.KeyInput;
    security: UpdateKeySecurity;
}
export declare class UpdateKeyResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}

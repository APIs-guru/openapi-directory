import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteKeyPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteKeySecurity extends SpeakeasyBase {
    cookieSid: shared.SchemeCookieSid;
}
export declare class DeleteKeyRequest extends SpeakeasyBase {
    pathParams: DeleteKeyPathParams;
    security: DeleteKeySecurity;
}
export declare class DeleteKeyResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}

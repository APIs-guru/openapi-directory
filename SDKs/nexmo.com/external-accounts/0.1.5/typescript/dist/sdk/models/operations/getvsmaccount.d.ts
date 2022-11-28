import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVsmAccountPathParams extends SpeakeasyBase {
    externalId: string;
}
export declare class GetVsmAccountSecurity extends SpeakeasyBase {
    bearerAuth?: shared.SchemeBearerAuth;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetVsmAccountRequest extends SpeakeasyBase {
    pathParams: GetVsmAccountPathParams;
    security: GetVsmAccountSecurity;
}
export declare class GetVsmAccountResponse extends SpeakeasyBase {
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    contentType: string;
    statusCode: number;
    vsmAccountResponse?: shared.VsmAccountResponse;
}

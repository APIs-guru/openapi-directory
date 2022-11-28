import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWaAccountPathParams extends SpeakeasyBase {
    externalId: string;
}
export declare class GetWaAccountSecurity extends SpeakeasyBase {
    bearerAuth?: shared.SchemeBearerAuth;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetWaAccountRequest extends SpeakeasyBase {
    pathParams: GetWaAccountPathParams;
    security: GetWaAccountSecurity;
}
export declare class GetWaAccountResponse extends SpeakeasyBase {
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    contentType: string;
    statusCode: number;
    waAccountResponse?: shared.WaAccountResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmAuthenticationConfigIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmAuthenticationConfigIdRequest extends SpeakeasyBase {
    pathParams: GetRealmAuthenticationConfigIdPathParams;
}
export declare class GetRealmAuthenticationConfigIdResponse extends SpeakeasyBase {
    authenticatorConfigRepresentation?: shared.AuthenticatorConfigRepresentation;
    contentType: string;
    statusCode: number;
}

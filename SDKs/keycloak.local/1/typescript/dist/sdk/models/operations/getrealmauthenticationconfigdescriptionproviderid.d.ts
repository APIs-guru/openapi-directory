import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmAuthenticationConfigDescriptionProviderIdPathParams extends SpeakeasyBase {
    providerId: string;
    realm: string;
}
export declare class GetRealmAuthenticationConfigDescriptionProviderIdRequest extends SpeakeasyBase {
    pathParams: GetRealmAuthenticationConfigDescriptionProviderIdPathParams;
}
export declare class GetRealmAuthenticationConfigDescriptionProviderIdResponse extends SpeakeasyBase {
    authenticatorConfigInfoRepresentation?: shared.AuthenticatorConfigInfoRepresentation;
    contentType: string;
    statusCode: number;
}

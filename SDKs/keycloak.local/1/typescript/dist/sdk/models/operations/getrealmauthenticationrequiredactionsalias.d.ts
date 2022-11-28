import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmAuthenticationRequiredActionsAliasPathParams extends SpeakeasyBase {
    alias: string;
    realm: string;
}
export declare class GetRealmAuthenticationRequiredActionsAliasRequest extends SpeakeasyBase {
    pathParams: GetRealmAuthenticationRequiredActionsAliasPathParams;
}
export declare class GetRealmAuthenticationRequiredActionsAliasResponse extends SpeakeasyBase {
    contentType: string;
    requiredActionProviderRepresentation?: shared.RequiredActionProviderRepresentation;
    statusCode: number;
}

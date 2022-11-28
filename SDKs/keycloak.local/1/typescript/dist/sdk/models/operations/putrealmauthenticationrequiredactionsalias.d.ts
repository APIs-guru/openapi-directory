import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmAuthenticationRequiredActionsAliasPathParams extends SpeakeasyBase {
    alias: string;
    realm: string;
}
export declare class PutRealmAuthenticationRequiredActionsAliasRequest extends SpeakeasyBase {
    pathParams: PutRealmAuthenticationRequiredActionsAliasPathParams;
    request: shared.RequiredActionProviderRepresentation;
}
export declare class PutRealmAuthenticationRequiredActionsAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

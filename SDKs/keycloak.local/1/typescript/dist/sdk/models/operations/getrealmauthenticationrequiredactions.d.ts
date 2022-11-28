import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmAuthenticationRequiredActionsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmAuthenticationRequiredActionsRequest extends SpeakeasyBase {
    pathParams: GetRealmAuthenticationRequiredActionsPathParams;
}
export declare class GetRealmAuthenticationRequiredActionsResponse extends SpeakeasyBase {
    contentType: string;
    requiredActionProviderRepresentations?: shared.RequiredActionProviderRepresentation[];
    statusCode: number;
}

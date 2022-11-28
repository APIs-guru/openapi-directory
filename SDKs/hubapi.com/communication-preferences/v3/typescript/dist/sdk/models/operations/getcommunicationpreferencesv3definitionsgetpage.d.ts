import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommunicationPreferencesV3DefinitionsGetPageSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
}
export declare class GetCommunicationPreferencesV3DefinitionsGetPageRequest extends SpeakeasyBase {
    security: GetCommunicationPreferencesV3DefinitionsGetPageSecurity;
}
export declare class GetCommunicationPreferencesV3DefinitionsGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    subscriptionDefinitionsResponse?: shared.SubscriptionDefinitionsResponse;
}

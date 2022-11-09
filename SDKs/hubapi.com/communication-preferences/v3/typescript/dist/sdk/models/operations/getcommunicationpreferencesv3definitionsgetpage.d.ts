import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetCommunicationPreferencesV3DefinitionsGetPageSecurity extends SpeakeasyBase {
    option1?: GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1;
    option2?: GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2;
    option3?: GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3;
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

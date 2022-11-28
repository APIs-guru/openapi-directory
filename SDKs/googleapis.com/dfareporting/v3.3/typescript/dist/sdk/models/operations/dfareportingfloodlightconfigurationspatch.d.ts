import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightConfigurationsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingFloodlightConfigurationsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingFloodlightConfigurationsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightConfigurationsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightConfigurationsPatchPathParams;
    queryParams: DfareportingFloodlightConfigurationsPatchQueryParams;
    request?: shared.FloodlightConfiguration;
    security: DfareportingFloodlightConfigurationsPatchSecurity;
}
export declare class DfareportingFloodlightConfigurationsPatchResponse extends SpeakeasyBase {
    contentType: string;
    floodlightConfiguration?: shared.FloodlightConfiguration;
    statusCode: number;
}

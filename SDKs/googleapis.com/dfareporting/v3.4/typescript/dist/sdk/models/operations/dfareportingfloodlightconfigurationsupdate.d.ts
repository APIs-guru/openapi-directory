import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightConfigurationsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingFloodlightConfigurationsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingFloodlightConfigurationsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightConfigurationsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightConfigurationsUpdatePathParams;
    queryParams: DfareportingFloodlightConfigurationsUpdateQueryParams;
    request?: shared.FloodlightConfiguration;
    security: DfareportingFloodlightConfigurationsUpdateSecurity;
}
export declare class DfareportingFloodlightConfigurationsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    floodlightConfiguration?: shared.FloodlightConfiguration;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightConfigurationsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingFloodlightConfigurationsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingFloodlightConfigurationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightConfigurationsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightConfigurationsGetPathParams;
    queryParams: DfareportingFloodlightConfigurationsGetQueryParams;
    security: DfareportingFloodlightConfigurationsGetSecurity;
}
export declare class DfareportingFloodlightConfigurationsGetResponse extends SpeakeasyBase {
    contentType: string;
    floodlightConfiguration?: shared.FloodlightConfiguration;
    statusCode: number;
}

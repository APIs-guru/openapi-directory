import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum WebriskUrisSearchThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}
export declare class WebriskUrisSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    threatTypes?: WebriskUrisSearchThreatTypesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
    uri?: string;
}
export declare class WebriskUrisSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebriskUrisSearchRequest extends SpeakeasyBase {
    queryParams: WebriskUrisSearchQueryParams;
    security: WebriskUrisSearchSecurity;
}
export declare class WebriskUrisSearchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudWebriskV1SearchUrisResponse?: shared.GoogleCloudWebriskV1SearchUrisResponse;
    statusCode: number;
}

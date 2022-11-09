import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum WebriskHashesSearchThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}
export declare class WebriskHashesSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    hashPrefix?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    threatTypes?: WebriskHashesSearchThreatTypesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WebriskHashesSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebriskHashesSearchRequest extends SpeakeasyBase {
    queryParams: WebriskHashesSearchQueryParams;
    security: WebriskHashesSearchSecurity;
}
export declare class WebriskHashesSearchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudWebriskV1SearchHashesResponse?: shared.GoogleCloudWebriskV1SearchHashesResponse;
    statusCode: number;
}

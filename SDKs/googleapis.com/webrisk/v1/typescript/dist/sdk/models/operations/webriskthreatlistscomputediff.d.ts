import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum {
    CompressionTypeUnspecified = "COMPRESSION_TYPE_UNSPECIFIED",
    Raw = "RAW",
    Rice = "RICE"
}
export declare enum WebriskThreatListsComputeDiffThreatTypeEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}
export declare class WebriskThreatListsComputeDiffQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    constraintsMaxDatabaseEntries?: number;
    constraintsMaxDiffEntries?: number;
    constraintsSupportedCompressions?: WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum[];
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    threatType?: WebriskThreatListsComputeDiffThreatTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
    versionToken?: string;
}
export declare class WebriskThreatListsComputeDiffSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebriskThreatListsComputeDiffRequest extends SpeakeasyBase {
    queryParams: WebriskThreatListsComputeDiffQueryParams;
    security: WebriskThreatListsComputeDiffSecurity;
}
export declare class WebriskThreatListsComputeDiffResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudWebriskV1ComputeThreatListDiffResponse?: shared.GoogleCloudWebriskV1ComputeThreatListDiffResponse;
    statusCode: number;
}

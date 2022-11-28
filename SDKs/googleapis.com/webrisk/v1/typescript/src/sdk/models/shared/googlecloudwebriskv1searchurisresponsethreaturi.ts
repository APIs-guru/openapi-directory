import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudWebriskV1SearchUrisResponseThreatUriThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}


// GoogleCloudWebriskV1SearchUrisResponseThreatUri
/** 
 * Contains threat information on a matching uri.
**/
export class GoogleCloudWebriskV1SearchUrisResponseThreatUri extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=threatTypes" })
  threatTypes?: GoogleCloudWebriskV1SearchUrisResponseThreatUriThreatTypesEnum[];
}

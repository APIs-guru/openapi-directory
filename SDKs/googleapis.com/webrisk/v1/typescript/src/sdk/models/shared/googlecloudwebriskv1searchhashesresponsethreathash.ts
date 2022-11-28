import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}


// GoogleCloudWebriskV1SearchHashesResponseThreatHash
/** 
 * Contains threat information on a matching hash.
**/
export class GoogleCloudWebriskV1SearchHashesResponseThreatHash extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=threatTypes" })
  threatTypes?: GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum[];
}

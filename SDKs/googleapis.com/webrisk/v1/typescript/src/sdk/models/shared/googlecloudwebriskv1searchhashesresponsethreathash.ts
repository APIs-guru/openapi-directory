import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED"
,    Malware = "MALWARE"
,    SocialEngineering = "SOCIAL_ENGINEERING"
,    UnwantedSoftware = "UNWANTED_SOFTWARE"
,    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}


// GoogleCloudWebriskV1SearchHashesResponseThreatHash
/** 
 * Contains threat information on a matching hash.
**/
export class GoogleCloudWebriskV1SearchHashesResponseThreatHash extends SpeakeasyBase {
  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=threatTypes" })
  threatTypes?: GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum[];
}

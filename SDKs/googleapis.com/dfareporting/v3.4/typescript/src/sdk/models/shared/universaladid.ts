import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UniversalAdIdRegistryEnum {
    Other = "OTHER"
,    AdIdOfficial = "AD_ID_OFFICIAL"
,    Clearcast = "CLEARCAST"
,    Dcm = "DCM"
}


// UniversalAdId
/** 
 * A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.
**/
export class UniversalAdId extends SpeakeasyBase {
  @Metadata({ data: "json, name=registry" })
  registry?: UniversalAdIdRegistryEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

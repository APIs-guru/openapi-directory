import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UniversalAdIdRegistryEnum {
    Other = "OTHER",
    AdIdOfficial = "AD_ID_OFFICIAL",
    Clearcast = "CLEARCAST",
    Dcm = "DCM"
}


// UniversalAdId
/** 
 * A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.
**/
export class UniversalAdId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: UniversalAdIdRegistryEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

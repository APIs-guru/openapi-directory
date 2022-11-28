import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SdfConfig } from "./sdfconfig";



// AdvertiserSdfConfig
/** 
 * Structured Data Files (SDF) settings of an advertiser.
**/
export class AdvertiserSdfConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overridePartnerSdfConfig" })
  overridePartnerSdfConfig?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sdfConfig" })
  sdfConfig?: SdfConfig;
}

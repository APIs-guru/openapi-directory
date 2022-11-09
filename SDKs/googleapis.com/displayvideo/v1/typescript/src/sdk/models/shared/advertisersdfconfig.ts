import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SdfConfig } from "./sdfconfig";


// AdvertiserSdfConfig
/** 
 * Structured Data Files (SDF) settings of an advertiser.
**/
export class AdvertiserSdfConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=overridePartnerSdfConfig" })
  overridePartnerSdfConfig?: boolean;

  @Metadata({ data: "json, name=sdfConfig" })
  sdfConfig?: SdfConfig;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdvertiserSdfConfig } from "./advertisersdfconfig";


// AdvertiserDataAccessConfig
/** 
 * Settings that control how advertiser related data may be accessed.
**/
export class AdvertiserDataAccessConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=sdfConfig" })
  sdfConfig?: AdvertiserSdfConfig;
}

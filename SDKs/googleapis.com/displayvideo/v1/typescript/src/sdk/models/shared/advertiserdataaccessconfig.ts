import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdvertiserSdfConfig } from "./advertisersdfconfig";



// AdvertiserDataAccessConfig
/** 
 * Settings that control how advertiser related data may be accessed.
**/
export class AdvertiserDataAccessConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sdfConfig" })
  sdfConfig?: AdvertiserSdfConfig;
}

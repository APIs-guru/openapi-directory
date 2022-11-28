import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SdfConfig } from "./sdfconfig";



// PartnerDataAccessConfig
/** 
 * Settings that control how partner related data may be accessed.
**/
export class PartnerDataAccessConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sdfConfig" })
  sdfConfig?: SdfConfig;
}

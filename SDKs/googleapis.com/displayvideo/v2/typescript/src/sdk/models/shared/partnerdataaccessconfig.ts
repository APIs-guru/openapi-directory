import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SdfConfig } from "./sdfconfig";


// PartnerDataAccessConfig
/** 
 * Settings that control how partner related data may be accessed.
**/
export class PartnerDataAccessConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=sdfConfig" })
  sdfConfig?: SdfConfig;
}

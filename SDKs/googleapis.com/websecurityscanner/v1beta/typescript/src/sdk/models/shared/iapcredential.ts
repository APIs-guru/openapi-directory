import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IapTestServiceAccountInfo } from "./iaptestserviceaccountinfo";


// IapCredential
/** 
 * Describes authentication configuration for Identity-Aware-Proxy (IAP).
**/
export class IapCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=iapTestServiceAccountInfo" })
  iapTestServiceAccountInfo?: IapTestServiceAccountInfo;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IapTestServiceAccountInfo } from "./iaptestserviceaccountinfo";



// IapCredential
/** 
 * Describes authentication configuration for Identity-Aware-Proxy (IAP).
**/
export class IapCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iapTestServiceAccountInfo" })
  iapTestServiceAccountInfo?: IapTestServiceAccountInfo;
}

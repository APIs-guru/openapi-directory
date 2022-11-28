import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";



// GoogleChromePolicyVersionsV1DefineNetworkResponse
/** 
 * Response object for creating a network.
**/
export class GoogleChromePolicyVersionsV1DefineNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkId" })
  networkId?: string;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: GoogleChromePolicyVersionsV1NetworkSetting })
  settings?: GoogleChromePolicyVersionsV1NetworkSetting[];

  @SpeakeasyMetadata({ data: "json, name=targetResource" })
  targetResource?: string;
}

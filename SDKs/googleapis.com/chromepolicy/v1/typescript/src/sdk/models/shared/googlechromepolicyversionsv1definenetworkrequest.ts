import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";



// GoogleChromePolicyVersionsV1DefineNetworkRequest
/** 
 * Request object for creating a new network.
**/
export class GoogleChromePolicyVersionsV1DefineNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: GoogleChromePolicyVersionsV1NetworkSetting })
  settings?: GoogleChromePolicyVersionsV1NetworkSetting[];

  @SpeakeasyMetadata({ data: "json, name=targetResource" })
  targetResource?: string;
}

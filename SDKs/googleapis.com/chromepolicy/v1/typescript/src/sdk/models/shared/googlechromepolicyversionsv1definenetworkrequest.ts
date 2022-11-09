import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";


// GoogleChromePolicyVersionsV1DefineNetworkRequest
/** 
 * Request object for creating a new network.
**/
export class GoogleChromePolicyVersionsV1DefineNetworkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=settings", elemType: shared.GoogleChromePolicyVersionsV1NetworkSetting })
  settings?: GoogleChromePolicyVersionsV1NetworkSetting[];

  @Metadata({ data: "json, name=targetResource" })
  targetResource?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";


// GoogleChromePolicyVersionsV1DefineNetworkResponse
/** 
 * Response object for creating a network.
**/
export class GoogleChromePolicyVersionsV1DefineNetworkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkId" })
  networkId?: string;

  @Metadata({ data: "json, name=settings", elemType: shared.GoogleChromePolicyVersionsV1NetworkSetting })
  settings?: GoogleChromePolicyVersionsV1NetworkSetting[];

  @Metadata({ data: "json, name=targetResource" })
  targetResource?: string;
}

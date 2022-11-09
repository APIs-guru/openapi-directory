import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromePolicyVersionsV1RemoveNetworkRequest
/** 
 * Request object for removing a network
**/
export class GoogleChromePolicyVersionsV1RemoveNetworkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkId" })
  networkId?: string;

  @Metadata({ data: "json, name=targetResource" })
  targetResource?: string;
}

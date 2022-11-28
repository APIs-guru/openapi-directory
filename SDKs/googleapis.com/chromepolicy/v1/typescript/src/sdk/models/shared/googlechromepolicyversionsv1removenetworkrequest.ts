import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromePolicyVersionsV1RemoveNetworkRequest
/** 
 * Request object for removing a network
**/
export class GoogleChromePolicyVersionsV1RemoveNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkId" })
  networkId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetResource" })
  targetResource?: string;
}

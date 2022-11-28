import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitV2AutoRetrievalInfo
/** 
 * The information required to auto-retrieve an SMS.
**/
export class GoogleCloudIdentitytoolkitV2AutoRetrievalInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appSignatureHash" })
  appSignatureHash?: string;
}

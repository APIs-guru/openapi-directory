import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1Claim } from "./googlefactcheckingfactchecktoolsv1alpha1claim";



// GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
/** 
 * Response from searching fact-checked claims.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=claims", elemType: GoogleFactcheckingFactchecktoolsV1alpha1Claim })
  claims?: GoogleFactcheckingFactchecktoolsV1alpha1Claim[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFactcheckingFactchecktoolsV1alpha1Claim } from "./googlefactcheckingfactchecktoolsv1alpha1claim";


// GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
/** 
 * Response from searching fact-checked claims.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=claims", elemType: shared.GoogleFactcheckingFactchecktoolsV1alpha1Claim })
  claims?: GoogleFactcheckingFactchecktoolsV1alpha1Claim[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

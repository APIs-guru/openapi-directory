import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1Claim } from "./googlefactcheckingfactchecktoolsv1alpha1claim";
/**
 * Response from searching fact-checked claims.
**/
export declare class GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse extends SpeakeasyBase {
    claims?: GoogleFactcheckingFactchecktoolsV1alpha1Claim[];
    nextPageToken?: string;
}

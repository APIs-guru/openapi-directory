import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InitializeHubResponse
/** 
 * Response message for the InitializeHub method.
**/
export class InitializeHubResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceIdentity" })
  serviceIdentity?: string;

  @SpeakeasyMetadata({ data: "json, name=workloadIdentityPool" })
  workloadIdentityPool?: string;
}

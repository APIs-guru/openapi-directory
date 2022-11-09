import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InitializeHubResponse
/** 
 * Response message for the InitializeHub method.
**/
export class InitializeHubResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceIdentity" })
  serviceIdentity?: string;

  @Metadata({ data: "json, name=workloadIdentityPool" })
  workloadIdentityPool?: string;
}

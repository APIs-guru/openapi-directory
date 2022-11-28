import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudServicebrokerV1beta1DashboardClient
/** 
 * Message containing information required to activate Dashboard SSO feature.
**/
export class GoogleCloudServicebrokerV1beta1DashboardClient extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  redirectUri?: string;

  @SpeakeasyMetadata()
  secret?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1alpha1DashboardClient } from "./googlecloudservicebrokerv1alpha1dashboardclient";
import { GoogleCloudServicebrokerV1alpha1Plan } from "./googlecloudservicebrokerv1alpha1plan";



// GoogleCloudServicebrokerV1alpha1Service
/** 
 * The resource model mostly follows the Open Service Broker API, as
 * described here:
 * https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
 * Though due to Google Specifics it has additional optional fields.
**/
export class GoogleCloudServicebrokerV1alpha1Service extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bindable?: boolean;

  @SpeakeasyMetadata()
  bindingRetrievable?: boolean;

  @SpeakeasyMetadata()
  dashboardClient?: GoogleCloudServicebrokerV1alpha1DashboardClient;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  instanceRetrievable?: boolean;

  @SpeakeasyMetadata()
  metadata?: Map<string, any>;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  planUpdateable?: boolean;

  @SpeakeasyMetadata({ elemType: GoogleCloudServicebrokerV1alpha1Plan })
  plans?: GoogleCloudServicebrokerV1alpha1Plan[];

  @SpeakeasyMetadata()
  tags?: string[];
}

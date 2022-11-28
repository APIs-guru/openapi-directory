import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1DashboardClient } from "./googlecloudservicebrokerv1beta1dashboardclient";
import { GoogleCloudServicebrokerV1beta1Plan } from "./googlecloudservicebrokerv1beta1plan";



// GoogleCloudServicebrokerV1beta1Service
/** 
 * The resource model mostly follows the Open Service Broker API, as
 * described here:
 * https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
 * Though due to Google Specifics it has additional optional fields.
**/
export class GoogleCloudServicebrokerV1beta1Service extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bindable?: boolean;

  @SpeakeasyMetadata()
  bindingRetrievable?: boolean;

  @SpeakeasyMetadata()
  bindingsRetrievable?: boolean;

  @SpeakeasyMetadata()
  dashboardClient?: GoogleCloudServicebrokerV1beta1DashboardClient;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  instancesRetrievable?: boolean;

  @SpeakeasyMetadata()
  metadata?: Map<string, any>;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  planUpdateable?: boolean;

  @SpeakeasyMetadata({ elemType: GoogleCloudServicebrokerV1beta1Plan })
  plans?: GoogleCloudServicebrokerV1beta1Plan[];

  @SpeakeasyMetadata()
  tags?: string[];
}

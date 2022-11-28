import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSfdcInstance } from "./googlecloudintegrationsv1alphasfdcinstance";



// GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse
/** 
 * Response to list SfdcInstances.
**/
export class GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sfdcInstances", elemType: GoogleCloudIntegrationsV1alphaSfdcInstance })
  sfdcInstances?: GoogleCloudIntegrationsV1alphaSfdcInstance[];
}

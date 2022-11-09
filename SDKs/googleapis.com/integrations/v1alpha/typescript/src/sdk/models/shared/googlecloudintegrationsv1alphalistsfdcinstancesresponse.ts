import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaSfdcInstance } from "./googlecloudintegrationsv1alphasfdcinstance";


// GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse
/** 
 * Response to list SfdcInstances.
**/
export class GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sfdcInstances", elemType: shared.GoogleCloudIntegrationsV1alphaSfdcInstance })
  sfdcInstances?: GoogleCloudIntegrationsV1alphaSfdcInstance[];
}

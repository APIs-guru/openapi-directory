import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSuspension } from "./googlecloudintegrationsv1alphasuspension";



// GoogleCloudIntegrationsV1alphaListSuspensionsResponse
/** 
 * Response for Suspensions.ListSuspensions.
**/
export class GoogleCloudIntegrationsV1alphaListSuspensionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=suspensions", elemType: GoogleCloudIntegrationsV1alphaSuspension })
  suspensions?: GoogleCloudIntegrationsV1alphaSuspension[];
}

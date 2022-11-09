import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaSuspension } from "./googlecloudintegrationsv1alphasuspension";


// GoogleCloudIntegrationsV1alphaListSuspensionsResponse
/** 
 * Response for Suspensions.ListSuspensions.
**/
export class GoogleCloudIntegrationsV1alphaListSuspensionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=suspensions", elemType: shared.GoogleCloudIntegrationsV1alphaSuspension })
  suspensions?: GoogleCloudIntegrationsV1alphaSuspension[];
}

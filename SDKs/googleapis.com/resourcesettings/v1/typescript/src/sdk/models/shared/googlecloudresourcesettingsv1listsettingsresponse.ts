import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudResourcesettingsV1Setting } from "./googlecloudresourcesettingsv1setting";


// GoogleCloudResourcesettingsV1ListSettingsResponse
/** 
 * The response from ListSettings.
**/
export class GoogleCloudResourcesettingsV1ListSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=settings", elemType: shared.GoogleCloudResourcesettingsV1Setting })
  settings?: GoogleCloudResourcesettingsV1Setting[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1Setting } from "./googlecloudresourcesettingsv1setting";



// GoogleCloudResourcesettingsV1ListSettingsResponse
/** 
 * The response from ListSettings.
**/
export class GoogleCloudResourcesettingsV1ListSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: GoogleCloudResourcesettingsV1Setting })
  settings?: GoogleCloudResourcesettingsV1Setting[];
}

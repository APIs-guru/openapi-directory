import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1Setting } from "./googlecloudresourcesettingsv1setting";
/**
 * The response from ListSettings.
**/
export declare class GoogleCloudResourcesettingsV1ListSettingsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    settings?: GoogleCloudResourcesettingsV1Setting[];
}

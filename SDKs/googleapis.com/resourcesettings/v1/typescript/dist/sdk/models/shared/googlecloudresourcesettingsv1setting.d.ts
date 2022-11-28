import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1Value } from "./googlecloudresourcesettingsv1value";
import { GoogleCloudResourcesettingsV1SettingMetadata } from "./googlecloudresourcesettingsv1settingmetadata";
/**
 * The schema for settings.
**/
export declare class GoogleCloudResourcesettingsV1Setting extends SpeakeasyBase {
    effectiveValue?: GoogleCloudResourcesettingsV1Value;
    etag?: string;
    localValue?: GoogleCloudResourcesettingsV1Value;
    metadata?: GoogleCloudResourcesettingsV1SettingMetadata;
    name?: string;
}

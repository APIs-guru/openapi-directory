import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1Value } from "./googlecloudresourcesettingsv1value";
import { GoogleCloudResourcesettingsV1SettingMetadata } from "./googlecloudresourcesettingsv1settingmetadata";



// GoogleCloudResourcesettingsV1Setting
/** 
 * The schema for settings.
**/
export class GoogleCloudResourcesettingsV1Setting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveValue" })
  effectiveValue?: GoogleCloudResourcesettingsV1Value;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=localValue" })
  localValue?: GoogleCloudResourcesettingsV1Value;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GoogleCloudResourcesettingsV1SettingMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

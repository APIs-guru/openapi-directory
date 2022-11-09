import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudResourcesettingsV1Value } from "./googlecloudresourcesettingsv1value";
import { GoogleCloudResourcesettingsV1Value } from "./googlecloudresourcesettingsv1value";
import { GoogleCloudResourcesettingsV1SettingMetadata } from "./googlecloudresourcesettingsv1settingmetadata";


// GoogleCloudResourcesettingsV1Setting
/** 
 * The schema for settings.
**/
export class GoogleCloudResourcesettingsV1Setting extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectiveValue" })
  effectiveValue?: GoogleCloudResourcesettingsV1Value;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=localValue" })
  localValue?: GoogleCloudResourcesettingsV1Value;

  @Metadata({ data: "json, name=metadata" })
  metadata?: GoogleCloudResourcesettingsV1SettingMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

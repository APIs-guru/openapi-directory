import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1ValueEnumValue } from "./googlecloudresourcesettingsv1valueenumvalue";
import { GoogleCloudResourcesettingsV1ValueStringMap } from "./googlecloudresourcesettingsv1valuestringmap";
import { GoogleCloudResourcesettingsV1ValueStringSet } from "./googlecloudresourcesettingsv1valuestringset";



// GoogleCloudResourcesettingsV1Value
/** 
 * The data in a setting value.
**/
export class GoogleCloudResourcesettingsV1Value extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=durationValue" })
  durationValue?: string;

  @SpeakeasyMetadata({ data: "json, name=enumValue" })
  enumValue?: GoogleCloudResourcesettingsV1ValueEnumValue;

  @SpeakeasyMetadata({ data: "json, name=stringMapValue" })
  stringMapValue?: GoogleCloudResourcesettingsV1ValueStringMap;

  @SpeakeasyMetadata({ data: "json, name=stringSetValue" })
  stringSetValue?: GoogleCloudResourcesettingsV1ValueStringSet;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}

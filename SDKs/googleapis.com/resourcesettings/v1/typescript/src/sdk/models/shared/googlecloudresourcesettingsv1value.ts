import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudResourcesettingsV1ValueEnumValue } from "./googlecloudresourcesettingsv1valueenumvalue";
import { GoogleCloudResourcesettingsV1ValueStringMap } from "./googlecloudresourcesettingsv1valuestringmap";
import { GoogleCloudResourcesettingsV1ValueStringSet } from "./googlecloudresourcesettingsv1valuestringset";


// GoogleCloudResourcesettingsV1Value
/** 
 * The data in a setting value.
**/
export class GoogleCloudResourcesettingsV1Value extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanValue" })
  booleanValue?: boolean;

  @Metadata({ data: "json, name=durationValue" })
  durationValue?: string;

  @Metadata({ data: "json, name=enumValue" })
  enumValue?: GoogleCloudResourcesettingsV1ValueEnumValue;

  @Metadata({ data: "json, name=stringMapValue" })
  stringMapValue?: GoogleCloudResourcesettingsV1ValueStringMap;

  @Metadata({ data: "json, name=stringSetValue" })
  stringSetValue?: GoogleCloudResourcesettingsV1ValueStringSet;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}

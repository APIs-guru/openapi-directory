import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1ValueEnumValue } from "./googlecloudresourcesettingsv1valueenumvalue";
import { GoogleCloudResourcesettingsV1ValueStringMap } from "./googlecloudresourcesettingsv1valuestringmap";
import { GoogleCloudResourcesettingsV1ValueStringSet } from "./googlecloudresourcesettingsv1valuestringset";
/**
 * The data in a setting value.
**/
export declare class GoogleCloudResourcesettingsV1Value extends SpeakeasyBase {
    booleanValue?: boolean;
    durationValue?: string;
    enumValue?: GoogleCloudResourcesettingsV1ValueEnumValue;
    stringMapValue?: GoogleCloudResourcesettingsV1ValueStringMap;
    stringSetValue?: GoogleCloudResourcesettingsV1ValueStringSet;
    stringValue?: string;
}

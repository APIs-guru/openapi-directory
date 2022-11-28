import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1Value } from "./googlecloudresourcesettingsv1value";
export declare enum GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Boolean = "BOOLEAN",
    String = "STRING",
    StringSet = "STRING_SET",
    EnumValue = "ENUM_VALUE",
    DurationValue = "DURATION_VALUE",
    StringMap = "STRING_MAP"
}
/**
 * Metadata about a setting which is not editable by the end user.
**/
export declare class GoogleCloudResourcesettingsV1SettingMetadata extends SpeakeasyBase {
    dataType?: GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum;
    defaultValue?: GoogleCloudResourcesettingsV1Value;
    description?: string;
    displayName?: string;
    readOnly?: boolean;
}

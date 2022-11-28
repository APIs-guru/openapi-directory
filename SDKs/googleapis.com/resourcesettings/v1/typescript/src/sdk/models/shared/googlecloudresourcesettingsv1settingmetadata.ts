import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudResourcesettingsV1Value } from "./googlecloudresourcesettingsv1value";


export enum GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Boolean = "BOOLEAN",
    String = "STRING",
    StringSet = "STRING_SET",
    EnumValue = "ENUM_VALUE",
    DurationValue = "DURATION_VALUE",
    StringMap = "STRING_MAP"
}


// GoogleCloudResourcesettingsV1SettingMetadata
/** 
 * Metadata about a setting which is not editable by the end user.
**/
export class GoogleCloudResourcesettingsV1SettingMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: GoogleCloudResourcesettingsV1Value;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;
}

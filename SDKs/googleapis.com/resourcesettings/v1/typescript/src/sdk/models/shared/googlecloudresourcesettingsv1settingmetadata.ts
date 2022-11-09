import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudResourcesettingsV1Value } from "./googlecloudresourcesettingsv1value";

export enum GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED"
,    Boolean = "BOOLEAN"
,    String = "STRING"
,    StringSet = "STRING_SET"
,    EnumValue = "ENUM_VALUE"
,    DurationValue = "DURATION_VALUE"
,    StringMap = "STRING_MAP"
}


// GoogleCloudResourcesettingsV1SettingMetadata
/** 
 * Metadata about a setting which is not editable by the end user.
**/
export class GoogleCloudResourcesettingsV1SettingMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType?: GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum;

  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: GoogleCloudResourcesettingsV1Value;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";
import { EnterpriseCrmEventbusProtoLogSettings } from "./enterprisecrmeventbusprotologsettings";


export enum EnterpriseCrmEventbusProtoAttributesDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Email = "EMAIL",
    Url = "URL",
    Currency = "CURRENCY",
    Timestamp = "TIMESTAMP",
    DomainName = "DOMAIN_NAME"
}

export enum EnterpriseCrmEventbusProtoAttributesSearchableEnum {
    Unspecified = "UNSPECIFIED",
    Yes = "YES",
    No = "NO"
}


// EnterpriseCrmEventbusProtoAttributes
/** 
 * Attributes are additional options that can be associated with each event property. For more information, see go/integration-platform/event_bus/attributes_registry.md. Next available: 8
**/
export class EnterpriseCrmEventbusProtoAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: EnterpriseCrmEventbusProtoAttributesDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: EnterpriseCrmEventbusProtoValueType;

  @SpeakeasyMetadata({ data: "json, name=isRequired" })
  isRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSearchable" })
  isSearchable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logSettings" })
  logSettings?: EnterpriseCrmEventbusProtoLogSettings;

  @SpeakeasyMetadata({ data: "json, name=searchable" })
  searchable?: EnterpriseCrmEventbusProtoAttributesSearchableEnum;

  @SpeakeasyMetadata({ data: "json, name=taskVisibility" })
  taskVisibility?: string[];
}

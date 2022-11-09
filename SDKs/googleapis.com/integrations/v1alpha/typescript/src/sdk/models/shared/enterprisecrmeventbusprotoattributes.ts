import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";
import { EnterpriseCrmEventbusProtoLogSettings } from "./enterprisecrmeventbusprotologsettings";

export enum EnterpriseCrmEventbusProtoAttributesDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED"
,    Email = "EMAIL"
,    Url = "URL"
,    Currency = "CURRENCY"
,    Timestamp = "TIMESTAMP"
,    DomainName = "DOMAIN_NAME"
}

export enum EnterpriseCrmEventbusProtoAttributesSearchableEnum {
    Unspecified = "UNSPECIFIED"
,    Yes = "YES"
,    No = "NO"
}


// EnterpriseCrmEventbusProtoAttributes
/** 
 * Attributes are additional options that can be associated with each event property. For more information, see go/integration-platform/event_bus/attributes_registry.md. Next available: 8
**/
export class EnterpriseCrmEventbusProtoAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType?: EnterpriseCrmEventbusProtoAttributesDataTypeEnum;

  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: EnterpriseCrmEventbusProtoValueType;

  @Metadata({ data: "json, name=isRequired" })
  isRequired?: boolean;

  @Metadata({ data: "json, name=isSearchable" })
  isSearchable?: boolean;

  @Metadata({ data: "json, name=logSettings" })
  logSettings?: EnterpriseCrmEventbusProtoLogSettings;

  @Metadata({ data: "json, name=searchable" })
  searchable?: EnterpriseCrmEventbusProtoAttributesSearchableEnum;

  @Metadata({ data: "json, name=taskVisibility" })
  taskVisibility?: string[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoValueType } from "./enterprisecrmeventbusprotovaluetype";
import { EnterpriseCrmEventbusProtoLogSettings } from "./enterprisecrmeventbusprotologsettings";
export declare enum EnterpriseCrmEventbusProtoAttributesDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Email = "EMAIL",
    Url = "URL",
    Currency = "CURRENCY",
    Timestamp = "TIMESTAMP",
    DomainName = "DOMAIN_NAME"
}
export declare enum EnterpriseCrmEventbusProtoAttributesSearchableEnum {
    Unspecified = "UNSPECIFIED",
    Yes = "YES",
    No = "NO"
}
/**
 * Attributes are additional options that can be associated with each event property. For more information, see go/integration-platform/event_bus/attributes_registry.md. Next available: 8
**/
export declare class EnterpriseCrmEventbusProtoAttributes extends SpeakeasyBase {
    dataType?: EnterpriseCrmEventbusProtoAttributesDataTypeEnum;
    defaultValue?: EnterpriseCrmEventbusProtoValueType;
    isRequired?: boolean;
    isSearchable?: boolean;
    logSettings?: EnterpriseCrmEventbusProtoLogSettings;
    searchable?: EnterpriseCrmEventbusProtoAttributesSearchableEnum;
    taskVisibility?: string[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
export declare enum GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum {
    IntegrationParameterDataTypeUnspecified = "INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED",
    StringValue = "STRING_VALUE",
    IntValue = "INT_VALUE",
    DoubleValue = "DOUBLE_VALUE",
    BooleanValue = "BOOLEAN_VALUE",
    StringArray = "STRING_ARRAY",
    IntArray = "INT_ARRAY",
    DoubleArray = "DOUBLE_ARRAY",
    BooleanArray = "BOOLEAN_ARRAY",
    JsonValue = "JSON_VALUE",
    ProtoValue = "PROTO_VALUE",
    ProtoArray = "PROTO_ARRAY"
}
export declare enum GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum {
    InOutTypeUnspecified = "IN_OUT_TYPE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    InOut = "IN_OUT"
}
/**
 * Integration Parameter is defined in the integration config and are used to provide information about data types of the expected parameters and provide any default values if needed. They can also be used to add custom attributes. These are static in nature and should not be used for dynamic event definition.
**/
export declare class GoogleCloudIntegrationsV1alphaIntegrationParameter extends SpeakeasyBase {
    dataType?: GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum;
    defaultValue?: GoogleCloudIntegrationsV1alphaValueType;
    displayName?: string;
    inputOutputType?: GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum;
    isTransient?: boolean;
    jsonSchema?: string;
    key?: string;
    producer?: string;
    searchable?: boolean;
}

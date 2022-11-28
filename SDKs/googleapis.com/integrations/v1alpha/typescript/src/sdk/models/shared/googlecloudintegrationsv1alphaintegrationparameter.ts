import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";


export enum GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum {
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

export enum GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum {
    InOutTypeUnspecified = "IN_OUT_TYPE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    InOut = "IN_OUT"
}


// GoogleCloudIntegrationsV1alphaIntegrationParameter
/** 
 * Integration Parameter is defined in the integration config and are used to provide information about data types of the expected parameters and provide any default values if needed. They can also be used to add custom attributes. These are static in nature and should not be used for dynamic event definition.
**/
export class GoogleCloudIntegrationsV1alphaIntegrationParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: GoogleCloudIntegrationsV1alphaValueType;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inputOutputType" })
  inputOutputType?: GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=isTransient" })
  isTransient?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jsonSchema" })
  jsonSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=producer" })
  producer?: string;

  @SpeakeasyMetadata({ data: "json, name=searchable" })
  searchable?: boolean;
}

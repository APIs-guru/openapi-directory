import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaParameterMapEntry } from "./googlecloudintegrationsv1alphaparametermapentry";

export enum GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum {
    IntegrationParameterDataTypeUnspecified = "INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED"
,    StringValue = "STRING_VALUE"
,    IntValue = "INT_VALUE"
,    DoubleValue = "DOUBLE_VALUE"
,    BooleanValue = "BOOLEAN_VALUE"
,    StringArray = "STRING_ARRAY"
,    IntArray = "INT_ARRAY"
,    DoubleArray = "DOUBLE_ARRAY"
,    BooleanArray = "BOOLEAN_ARRAY"
,    JsonValue = "JSON_VALUE"
,    ProtoValue = "PROTO_VALUE"
,    ProtoArray = "PROTO_ARRAY"
}

export enum GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum {
    IntegrationParameterDataTypeUnspecified = "INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED"
,    StringValue = "STRING_VALUE"
,    IntValue = "INT_VALUE"
,    DoubleValue = "DOUBLE_VALUE"
,    BooleanValue = "BOOLEAN_VALUE"
,    StringArray = "STRING_ARRAY"
,    IntArray = "INT_ARRAY"
,    DoubleArray = "DOUBLE_ARRAY"
,    BooleanArray = "BOOLEAN_ARRAY"
,    JsonValue = "JSON_VALUE"
,    ProtoValue = "PROTO_VALUE"
,    ProtoArray = "PROTO_ARRAY"
}


// GoogleCloudIntegrationsV1alphaParameterMap
/** 
 * A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.
**/
export class GoogleCloudIntegrationsV1alphaParameterMap extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.GoogleCloudIntegrationsV1alphaParameterMapEntry })
  entries?: GoogleCloudIntegrationsV1alphaParameterMapEntry[];

  @Metadata({ data: "json, name=keyType" })
  keyType?: GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum;

  @Metadata({ data: "json, name=valueType" })
  valueType?: GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum;
}

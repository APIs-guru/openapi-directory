import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Value } from "./googlecloudchannelv1value";
export declare enum GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED",
    Int64 = "INT64",
    String = "STRING",
    Double = "DOUBLE"
}
/**
 * Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.
**/
export declare class GoogleCloudChannelV1ParameterDefinition extends SpeakeasyBase {
    allowedValues?: GoogleCloudChannelV1Value[];
    maxValue?: GoogleCloudChannelV1Value;
    minValue?: GoogleCloudChannelV1Value;
    name?: string;
    optional?: boolean;
    parameterType?: GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Value } from "./googlecloudchannelv1value";


export enum GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED",
    Int64 = "INT64",
    String = "STRING",
    Double = "DOUBLE"
}


// GoogleCloudChannelV1ParameterDefinition
/** 
 * Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.
**/
export class GoogleCloudChannelV1ParameterDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedValues", elemType: GoogleCloudChannelV1Value })
  allowedValues?: GoogleCloudChannelV1Value[];

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: GoogleCloudChannelV1Value;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: GoogleCloudChannelV1Value;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optional" })
  optional?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parameterType" })
  parameterType?: GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum;
}

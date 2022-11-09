import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1Value } from "./googlecloudchannelv1value";
import { GoogleCloudChannelV1Value } from "./googlecloudchannelv1value";
import { GoogleCloudChannelV1Value } from "./googlecloudchannelv1value";

export enum GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum {
    ParameterTypeUnspecified = "PARAMETER_TYPE_UNSPECIFIED"
,    Int64 = "INT64"
,    String = "STRING"
,    Double = "DOUBLE"
}


// GoogleCloudChannelV1ParameterDefinition
/** 
 * Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.
**/
export class GoogleCloudChannelV1ParameterDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedValues", elemType: shared.GoogleCloudChannelV1Value })
  allowedValues?: GoogleCloudChannelV1Value[];

  @Metadata({ data: "json, name=maxValue" })
  maxValue?: GoogleCloudChannelV1Value;

  @Metadata({ data: "json, name=minValue" })
  minValue?: GoogleCloudChannelV1Value;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=optional" })
  optional?: boolean;

  @Metadata({ data: "json, name=parameterType" })
  parameterType?: GoogleCloudChannelV1ParameterDefinitionParameterTypeEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Value } from "./googlecloudchannelv1value";



// GoogleCloudChannelV1Parameter
/** 
 * Definition for extended entitlement parameters.
**/
export class GoogleCloudChannelV1Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=editable" })
  editable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: GoogleCloudChannelV1Value;
}


// GoogleCloudChannelV1ParameterInput
/** 
 * Definition for extended entitlement parameters.
**/
export class GoogleCloudChannelV1ParameterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: GoogleCloudChannelV1Value;
}

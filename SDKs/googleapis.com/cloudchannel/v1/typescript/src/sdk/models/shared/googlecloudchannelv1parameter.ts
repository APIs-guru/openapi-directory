import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1Value } from "./googlecloudchannelv1value";


// GoogleCloudChannelV1Parameter
/** 
 * Definition for extended entitlement parameters.
**/
export class GoogleCloudChannelV1Parameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=editable" })
  editable?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: GoogleCloudChannelV1Value;
}

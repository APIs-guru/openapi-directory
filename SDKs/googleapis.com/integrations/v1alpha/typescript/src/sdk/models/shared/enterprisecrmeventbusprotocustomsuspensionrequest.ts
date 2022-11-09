import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest } from "./googleinternalcloudcrmeventbusv3posttoqueuewithtriggeridrequest";


export class EnterpriseCrmEventbusProtoCustomSuspensionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=postToQueueWithTriggerIdRequest" })
  postToQueueWithTriggerIdRequest?: GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest;

  @Metadata({ data: "json, name=suspensionInfoEventParameterKey" })
  suspensionInfoEventParameterKey?: string;
}

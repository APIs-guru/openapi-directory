import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest } from "./googleinternalcloudcrmeventbusv3posttoqueuewithtriggeridrequest";



export class EnterpriseCrmEventbusProtoCustomSuspensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=postToQueueWithTriggerIdRequest" })
  postToQueueWithTriggerIdRequest?: GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest;

  @SpeakeasyMetadata({ data: "json, name=suspensionInfoEventParameterKey" })
  suspensionInfoEventParameterKey?: string;
}

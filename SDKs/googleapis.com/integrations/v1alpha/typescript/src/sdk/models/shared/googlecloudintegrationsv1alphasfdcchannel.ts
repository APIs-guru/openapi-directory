import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaSfdcChannelInput
/** 
 * The SfdcChannel that points to a CDC or Platform Event Channel.
**/
export class GoogleCloudIntegrationsV1alphaSfdcChannelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelTopic" })
  channelTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastReplayId" })
  lastReplayId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleCloudIntegrationsV1alphaSfdcChannel
/** 
 * The SfdcChannel that points to a CDC or Platform Event Channel.
**/
export class GoogleCloudIntegrationsV1alphaSfdcChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelTopic" })
  channelTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastReplayId" })
  lastReplayId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaSfdcChannel
/** 
 * The SfdcChannel that points to a CDC or Platform Event Channel.
**/
export class GoogleCloudIntegrationsV1alphaSfdcChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelTopic" })
  channelTopic?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=lastReplayId" })
  lastReplayId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventTopicActionEnum } from "./eventtopicactionenum";
import { EventTopicResourceTypeEnum } from "./eventtopicresourcetypeenum";


export class EventTopic extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: EventTopicActionEnum;

  @Metadata({ data: "json, name=arguments" })
  arguments?: any;

  @Metadata({ data: "json, name=resource_id" })
  resourceId?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: EventTopicResourceTypeEnum;

  @Metadata({ data: "json, name=resource_url" })
  resourceUrl?: string;
}


export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=payload" })
  payload?: any;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_event" })
  timeEvent?: string;

  @Metadata({ data: "json, name=time_expire" })
  timeExpire?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: EventTopic;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

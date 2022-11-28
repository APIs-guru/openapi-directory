import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTopicActionEnum } from "./eventtopicactionenum";
import { EventTopicResourceTypeEnum } from "./eventtopicresourcetypeenum";



export class EventTopic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: EventTopicActionEnum;

  @SpeakeasyMetadata({ data: "json, name=arguments" })
  arguments?: any;

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: EventTopicResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resource_url" })
  resourceUrl?: string;
}


export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: any;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_event" })
  timeEvent?: string;

  @SpeakeasyMetadata({ data: "json, name=time_expire" })
  timeExpire?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: EventTopic;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

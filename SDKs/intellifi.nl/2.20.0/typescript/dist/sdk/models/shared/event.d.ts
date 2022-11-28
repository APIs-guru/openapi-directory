import { SpeakeasyBase } from "../../../internal/utils";
import { EventTopicActionEnum } from "./eventtopicactionenum";
import { EventTopicResourceTypeEnum } from "./eventtopicresourcetypeenum";
export declare class EventTopic extends SpeakeasyBase {
    action?: EventTopicActionEnum;
    arguments?: any;
    resourceId?: string;
    resourceType?: EventTopicResourceTypeEnum;
    resourceUrl?: string;
}
export declare class Event extends SpeakeasyBase {
    id?: string;
    payload?: any;
    timeCreated?: string;
    timeEvent?: string;
    timeExpire?: string;
    topic?: EventTopic;
    url?: string;
}

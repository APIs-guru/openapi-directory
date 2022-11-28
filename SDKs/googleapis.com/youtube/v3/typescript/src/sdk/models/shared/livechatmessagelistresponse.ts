import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiveChatMessage } from "./livechatmessage";
import { PageInfo } from "./pageinfo";



export class LiveChatMessageListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: LiveChatMessage })
  items?: LiveChatMessage[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=offlineAt" })
  offlineAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @SpeakeasyMetadata({ data: "json, name=pollingIntervalMillis" })
  pollingIntervalMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=tokenPagination" })
  tokenPagination?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaylistItem } from "./playlistitem";
import { PageInfo } from "./pageinfo";



export class PlaylistItemListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: PlaylistItem })
  items?: PlaylistItem[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @SpeakeasyMetadata({ data: "json, name=prevPageToken" })
  prevPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenPagination" })
  tokenPagination?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}

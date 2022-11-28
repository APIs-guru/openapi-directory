import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchHint
/** 
 * Class SearchHintResult.
**/
export class SearchHint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Album" })
  album?: string;

  @SpeakeasyMetadata({ data: "json, name=AlbumArtist" })
  albumArtist?: string;

  @SpeakeasyMetadata({ data: "json, name=AlbumId" })
  albumId?: string;

  @SpeakeasyMetadata({ data: "json, name=Artists" })
  artists?: string[];

  @SpeakeasyMetadata({ data: "json, name=BackdropImageItemId" })
  backdropImageItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=BackdropImageTag" })
  backdropImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EpisodeCount" })
  episodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexNumber" })
  indexNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=IsFolder" })
  isFolder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=MatchedTerm" })
  matchedTerm?: string;

  @SpeakeasyMetadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentIndexNumber" })
  parentIndexNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageAspectRatio" })
  primaryImageAspectRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageTag" })
  primaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductionYear" })
  productionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=RunTimeTicks" })
  runTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=Series" })
  series?: string;

  @SpeakeasyMetadata({ data: "json, name=SongCount" })
  songCount?: number;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=ThumbImageItemId" })
  thumbImageItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ThumbImageTag" })
  thumbImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}

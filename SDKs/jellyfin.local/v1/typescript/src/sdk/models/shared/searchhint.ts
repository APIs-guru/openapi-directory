import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchHint
/** 
 * Class SearchHintResult.
**/
export class SearchHint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Album" })
  album?: string;

  @Metadata({ data: "json, name=AlbumArtist" })
  albumArtist?: string;

  @Metadata({ data: "json, name=AlbumId" })
  albumId?: string;

  @Metadata({ data: "json, name=Artists" })
  artists?: string[];

  @Metadata({ data: "json, name=BackdropImageItemId" })
  backdropImageItemId?: string;

  @Metadata({ data: "json, name=BackdropImageTag" })
  backdropImageTag?: string;

  @Metadata({ data: "json, name=ChannelId" })
  channelId?: string;

  @Metadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=EpisodeCount" })
  episodeCount?: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=IndexNumber" })
  indexNumber?: number;

  @Metadata({ data: "json, name=IsFolder" })
  isFolder?: boolean;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=MatchedTerm" })
  matchedTerm?: string;

  @Metadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ParentIndexNumber" })
  parentIndexNumber?: number;

  @Metadata({ data: "json, name=PrimaryImageAspectRatio" })
  primaryImageAspectRatio?: number;

  @Metadata({ data: "json, name=PrimaryImageTag" })
  primaryImageTag?: string;

  @Metadata({ data: "json, name=ProductionYear" })
  productionYear?: number;

  @Metadata({ data: "json, name=RunTimeTicks" })
  runTimeTicks?: number;

  @Metadata({ data: "json, name=Series" })
  series?: string;

  @Metadata({ data: "json, name=SongCount" })
  songCount?: number;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=ThumbImageItemId" })
  thumbImageItemId?: string;

  @Metadata({ data: "json, name=ThumbImageTag" })
  thumbImageTag?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}

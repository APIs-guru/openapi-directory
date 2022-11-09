import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemCounts
/** 
 * Class LibrarySummary.
**/
export class ItemCounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlbumCount" })
  albumCount?: number;

  @Metadata({ data: "json, name=ArtistCount" })
  artistCount?: number;

  @Metadata({ data: "json, name=BookCount" })
  bookCount?: number;

  @Metadata({ data: "json, name=BoxSetCount" })
  boxSetCount?: number;

  @Metadata({ data: "json, name=EpisodeCount" })
  episodeCount?: number;

  @Metadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @Metadata({ data: "json, name=MovieCount" })
  movieCount?: number;

  @Metadata({ data: "json, name=MusicVideoCount" })
  musicVideoCount?: number;

  @Metadata({ data: "json, name=ProgramCount" })
  programCount?: number;

  @Metadata({ data: "json, name=SeriesCount" })
  seriesCount?: number;

  @Metadata({ data: "json, name=SongCount" })
  songCount?: number;

  @Metadata({ data: "json, name=TrailerCount" })
  trailerCount?: number;
}

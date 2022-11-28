import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemCounts
/** 
 * Class LibrarySummary.
**/
export class ItemCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlbumCount" })
  albumCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ArtistCount" })
  artistCount?: number;

  @SpeakeasyMetadata({ data: "json, name=BookCount" })
  bookCount?: number;

  @SpeakeasyMetadata({ data: "json, name=BoxSetCount" })
  boxSetCount?: number;

  @SpeakeasyMetadata({ data: "json, name=EpisodeCount" })
  episodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MovieCount" })
  movieCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MusicVideoCount" })
  musicVideoCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ProgramCount" })
  programCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SeriesCount" })
  seriesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SongCount" })
  songCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TrailerCount" })
  trailerCount?: number;
}

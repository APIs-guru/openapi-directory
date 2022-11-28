import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTypeEnum } from "./imagetypeenum";
import { ItemFieldsEnum } from "./itemfieldsenum";



// GetProgramsDto
/** 
 * Get programs dto.
**/
export class GetProgramsDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelIds" })
  channelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnableImageTypes" })
  enableImageTypes?: ImageTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=EnableImages" })
  enableImages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableTotalRecordCount" })
  enableTotalRecordCount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableUserData" })
  enableUserData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Fields" })
  fields?: ItemFieldsEnum[];

  @SpeakeasyMetadata({ data: "json, name=GenreIds" })
  genreIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Genres" })
  genres?: string[];

  @SpeakeasyMetadata({ data: "json, name=HasAired" })
  hasAired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ImageTypeLimit" })
  imageTypeLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=IsAiring" })
  isAiring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsKids" })
  isKids?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsMovie" })
  isMovie?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsNews" })
  isNews?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsSeries" })
  isSeries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsSports" })
  isSports?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LibrarySeriesId" })
  librarySeriesId?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxEndDate" })
  maxEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxStartDate" })
  maxStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MinEndDate" })
  minEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MinStartDate" })
  minStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=SeriesTimerId" })
  seriesTimerId?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: string;

  @SpeakeasyMetadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageTypeEnum } from "./imagetypeenum";
import { ItemFieldsEnum } from "./itemfieldsenum";


// GetProgramsDto
/** 
 * Get programs dto.
**/
export class GetProgramsDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelIds" })
  channelIds?: string[];

  @Metadata({ data: "json, name=EnableImageTypes" })
  enableImageTypes?: ImageTypeEnum[];

  @Metadata({ data: "json, name=EnableImages" })
  enableImages?: boolean;

  @Metadata({ data: "json, name=EnableTotalRecordCount" })
  enableTotalRecordCount?: boolean;

  @Metadata({ data: "json, name=EnableUserData" })
  enableUserData?: boolean;

  @Metadata({ data: "json, name=Fields" })
  fields?: ItemFieldsEnum[];

  @Metadata({ data: "json, name=GenreIds" })
  genreIds?: string[];

  @Metadata({ data: "json, name=Genres" })
  genres?: string[];

  @Metadata({ data: "json, name=HasAired" })
  hasAired?: boolean;

  @Metadata({ data: "json, name=ImageTypeLimit" })
  imageTypeLimit?: number;

  @Metadata({ data: "json, name=IsAiring" })
  isAiring?: boolean;

  @Metadata({ data: "json, name=IsKids" })
  isKids?: boolean;

  @Metadata({ data: "json, name=IsMovie" })
  isMovie?: boolean;

  @Metadata({ data: "json, name=IsNews" })
  isNews?: boolean;

  @Metadata({ data: "json, name=IsSeries" })
  isSeries?: boolean;

  @Metadata({ data: "json, name=IsSports" })
  isSports?: boolean;

  @Metadata({ data: "json, name=LibrarySeriesId" })
  librarySeriesId?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=MaxEndDate" })
  maxEndDate?: Date;

  @Metadata({ data: "json, name=MaxStartDate" })
  maxStartDate?: Date;

  @Metadata({ data: "json, name=MinEndDate" })
  minEndDate?: Date;

  @Metadata({ data: "json, name=MinStartDate" })
  minStartDate?: Date;

  @Metadata({ data: "json, name=SeriesTimerId" })
  seriesTimerId?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: string;

  @Metadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;
}

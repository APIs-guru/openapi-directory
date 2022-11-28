import { SpeakeasyBase } from "../../../internal/utils";
import { ImageTypeEnum } from "./imagetypeenum";
import { ItemFieldsEnum } from "./itemfieldsenum";
/**
 * Get programs dto.
**/
export declare class GetProgramsDto extends SpeakeasyBase {
    channelIds?: string[];
    enableImageTypes?: ImageTypeEnum[];
    enableImages?: boolean;
    enableTotalRecordCount?: boolean;
    enableUserData?: boolean;
    fields?: ItemFieldsEnum[];
    genreIds?: string[];
    genres?: string[];
    hasAired?: boolean;
    imageTypeLimit?: number;
    isAiring?: boolean;
    isKids?: boolean;
    isMovie?: boolean;
    isNews?: boolean;
    isSeries?: boolean;
    isSports?: boolean;
    librarySeriesId?: string;
    limit?: number;
    maxEndDate?: Date;
    maxStartDate?: Date;
    minEndDate?: Date;
    minStartDate?: Date;
    seriesTimerId?: string;
    sortBy?: string;
    sortOrder?: string;
    startIndex?: number;
    userId?: string;
}

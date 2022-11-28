import { SpeakeasyBase } from "../../../internal/utils";
import { DayPatternEnum } from "./daypatternenum";
import { DayOfWeekEnum } from "./dayofweekenum";
import { KeepUntilEnum } from "./keepuntilenum";
/**
 * Class SeriesTimerInfoDto.
**/
export declare class SeriesTimerInfoDto extends SpeakeasyBase {
    channelId?: string;
    channelName?: string;
    channelPrimaryImageTag?: string;
    dayPattern?: DayPatternEnum;
    days?: DayOfWeekEnum[];
    endDate?: Date;
    externalChannelId?: string;
    externalId?: string;
    externalProgramId?: string;
    id?: string;
    imageTags?: Map<string, string>;
    isPostPaddingRequired?: boolean;
    isPrePaddingRequired?: boolean;
    keepUntil?: KeepUntilEnum;
    keepUpTo?: number;
    name?: string;
    overview?: string;
    parentBackdropImageTags?: string[];
    parentBackdropItemId?: string;
    parentPrimaryImageItemId?: string;
    parentPrimaryImageTag?: string;
    parentThumbImageTag?: string;
    parentThumbItemId?: string;
    postPaddingSeconds?: number;
    prePaddingSeconds?: number;
    priority?: number;
    programId?: string;
    recordAnyChannel?: boolean;
    recordAnyTime?: boolean;
    recordNewOnly?: boolean;
    serverId?: string;
    serviceName?: string;
    skipEpisodesInLibrary?: boolean;
    startDate?: Date;
    type?: string;
}

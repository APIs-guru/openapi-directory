import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DayPatternEnum } from "./daypatternenum";
import { DayOfWeekEnum } from "./dayofweekenum";
import { KeepUntilEnum } from "./keepuntilenum";


// SeriesTimerInfoDto
/** 
 * Class SeriesTimerInfoDto.
**/
export class SeriesTimerInfoDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelId" })
  channelId?: string;

  @Metadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @Metadata({ data: "json, name=ChannelPrimaryImageTag" })
  channelPrimaryImageTag?: string;

  @Metadata({ data: "json, name=DayPattern" })
  dayPattern?: DayPatternEnum;

  @Metadata({ data: "json, name=Days" })
  days?: DayOfWeekEnum[];

  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=ExternalChannelId" })
  externalChannelId?: string;

  @Metadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @Metadata({ data: "json, name=ExternalProgramId" })
  externalProgramId?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ImageTags" })
  imageTags?: Map<string, string>;

  @Metadata({ data: "json, name=IsPostPaddingRequired" })
  isPostPaddingRequired?: boolean;

  @Metadata({ data: "json, name=IsPrePaddingRequired" })
  isPrePaddingRequired?: boolean;

  @Metadata({ data: "json, name=KeepUntil" })
  keepUntil?: KeepUntilEnum;

  @Metadata({ data: "json, name=KeepUpTo" })
  keepUpTo?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Overview" })
  overview?: string;

  @Metadata({ data: "json, name=ParentBackdropImageTags" })
  parentBackdropImageTags?: string[];

  @Metadata({ data: "json, name=ParentBackdropItemId" })
  parentBackdropItemId?: string;

  @Metadata({ data: "json, name=ParentPrimaryImageItemId" })
  parentPrimaryImageItemId?: string;

  @Metadata({ data: "json, name=ParentPrimaryImageTag" })
  parentPrimaryImageTag?: string;

  @Metadata({ data: "json, name=ParentThumbImageTag" })
  parentThumbImageTag?: string;

  @Metadata({ data: "json, name=ParentThumbItemId" })
  parentThumbItemId?: string;

  @Metadata({ data: "json, name=PostPaddingSeconds" })
  postPaddingSeconds?: number;

  @Metadata({ data: "json, name=PrePaddingSeconds" })
  prePaddingSeconds?: number;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=ProgramId" })
  programId?: string;

  @Metadata({ data: "json, name=RecordAnyChannel" })
  recordAnyChannel?: boolean;

  @Metadata({ data: "json, name=RecordAnyTime" })
  recordAnyTime?: boolean;

  @Metadata({ data: "json, name=RecordNewOnly" })
  recordNewOnly?: boolean;

  @Metadata({ data: "json, name=ServerId" })
  serverId?: string;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=SkipEpisodesInLibrary" })
  skipEpisodesInLibrary?: boolean;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DayPatternEnum } from "./daypatternenum";
import { DayOfWeekEnum } from "./dayofweekenum";
import { KeepUntilEnum } from "./keepuntilenum";



// SeriesTimerInfoDto
/** 
 * Class SeriesTimerInfoDto.
**/
export class SeriesTimerInfoDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelPrimaryImageTag" })
  channelPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=DayPattern" })
  dayPattern?: DayPatternEnum;

  @SpeakeasyMetadata({ data: "json, name=Days" })
  days?: DayOfWeekEnum[];

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExternalChannelId" })
  externalChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalProgramId" })
  externalProgramId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageTags" })
  imageTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=IsPostPaddingRequired" })
  isPostPaddingRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPrePaddingRequired" })
  isPrePaddingRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KeepUntil" })
  keepUntil?: KeepUntilEnum;

  @SpeakeasyMetadata({ data: "json, name=KeepUpTo" })
  keepUpTo?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentBackdropImageTags" })
  parentBackdropImageTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=ParentBackdropItemId" })
  parentBackdropItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageItemId" })
  parentPrimaryImageItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentPrimaryImageTag" })
  parentPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentThumbImageTag" })
  parentThumbImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentThumbItemId" })
  parentThumbItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=PostPaddingSeconds" })
  postPaddingSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=PrePaddingSeconds" })
  prePaddingSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=ProgramId" })
  programId?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordAnyChannel" })
  recordAnyChannel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RecordAnyTime" })
  recordAnyTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RecordNewOnly" })
  recordNewOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=SkipEpisodesInLibrary" })
  skipEpisodesInLibrary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}

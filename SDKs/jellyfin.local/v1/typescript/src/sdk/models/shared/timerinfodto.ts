import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeepUntilEnum } from "./keepuntilenum";
import { BaseItemDto } from "./baseitemdto";
import { RecordingStatusEnum } from "./recordingstatusenum";


export class TimerInfoDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelId" })
  channelId?: string;

  @Metadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @Metadata({ data: "json, name=ChannelPrimaryImageTag" })
  channelPrimaryImageTag?: string;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=ExternalChannelId" })
  externalChannelId?: string;

  @Metadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @Metadata({ data: "json, name=ExternalProgramId" })
  externalProgramId?: string;

  @Metadata({ data: "json, name=ExternalSeriesTimerId" })
  externalSeriesTimerId?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=IsPostPaddingRequired" })
  isPostPaddingRequired?: boolean;

  @Metadata({ data: "json, name=IsPrePaddingRequired" })
  isPrePaddingRequired?: boolean;

  @Metadata({ data: "json, name=KeepUntil" })
  keepUntil?: KeepUntilEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Overview" })
  overview?: string;

  @Metadata({ data: "json, name=ParentBackdropImageTags" })
  parentBackdropImageTags?: string[];

  @Metadata({ data: "json, name=ParentBackdropItemId" })
  parentBackdropItemId?: string;

  @Metadata({ data: "json, name=PostPaddingSeconds" })
  postPaddingSeconds?: number;

  @Metadata({ data: "json, name=PrePaddingSeconds" })
  prePaddingSeconds?: number;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=ProgramId" })
  programId?: string;

  @Metadata({ data: "json, name=ProgramInfo" })
  programInfo?: BaseItemDto;

  @Metadata({ data: "json, name=RunTimeTicks" })
  runTimeTicks?: number;

  @Metadata({ data: "json, name=SeriesTimerId" })
  seriesTimerId?: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId?: string;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: RecordingStatusEnum;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}

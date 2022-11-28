import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeepUntilEnum } from "./keepuntilenum";
import { BaseItemDto } from "./baseitemdto";
import { RecordingStatusEnum } from "./recordingstatusenum";
import { BaseItemDtoInput } from "./baseitemdto";



export class TimerInfoDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelPrimaryImageTag" })
  channelPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExternalChannelId" })
  externalChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalProgramId" })
  externalProgramId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalSeriesTimerId" })
  externalSeriesTimerId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IsPostPaddingRequired" })
  isPostPaddingRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPrePaddingRequired" })
  isPrePaddingRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KeepUntil" })
  keepUntil?: KeepUntilEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentBackdropImageTags" })
  parentBackdropImageTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=ParentBackdropItemId" })
  parentBackdropItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=PostPaddingSeconds" })
  postPaddingSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=PrePaddingSeconds" })
  prePaddingSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=ProgramId" })
  programId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProgramInfo" })
  programInfo?: BaseItemDto;

  @SpeakeasyMetadata({ data: "json, name=RunTimeTicks" })
  runTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=SeriesTimerId" })
  seriesTimerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: RecordingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}


export class TimerInfoDtoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelName" })
  channelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelPrimaryImageTag" })
  channelPrimaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExternalChannelId" })
  externalChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalProgramId" })
  externalProgramId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalSeriesTimerId" })
  externalSeriesTimerId?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IsPostPaddingRequired" })
  isPostPaddingRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPrePaddingRequired" })
  isPrePaddingRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KeepUntil" })
  keepUntil?: KeepUntilEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentBackdropImageTags" })
  parentBackdropImageTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=ParentBackdropItemId" })
  parentBackdropItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=PostPaddingSeconds" })
  postPaddingSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=PrePaddingSeconds" })
  prePaddingSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=ProgramId" })
  programId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProgramInfo" })
  programInfo?: BaseItemDtoInput;

  @SpeakeasyMetadata({ data: "json, name=RunTimeTicks" })
  runTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=SeriesTimerId" })
  seriesTimerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: RecordingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}

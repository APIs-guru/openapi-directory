import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum {
    VideoDurationUnspecified = "VIDEO_DURATION_UNSPECIFIED"
,    VideoDurationSecondsNone = "VIDEO_DURATION_SECONDS_NONE"
,    VideoDurationSeconds0 = "VIDEO_DURATION_SECONDS_0"
,    VideoDurationSeconds1 = "VIDEO_DURATION_SECONDS_1"
,    VideoDurationSeconds2 = "VIDEO_DURATION_SECONDS_2"
,    VideoDurationSeconds3 = "VIDEO_DURATION_SECONDS_3"
,    VideoDurationSeconds4 = "VIDEO_DURATION_SECONDS_4"
,    VideoDurationSeconds5 = "VIDEO_DURATION_SECONDS_5"
,    VideoDurationSeconds6 = "VIDEO_DURATION_SECONDS_6"
,    VideoDurationSeconds7 = "VIDEO_DURATION_SECONDS_7"
,    VideoDurationSeconds8 = "VIDEO_DURATION_SECONDS_8"
,    VideoDurationSeconds9 = "VIDEO_DURATION_SECONDS_9"
,    VideoDurationSeconds10 = "VIDEO_DURATION_SECONDS_10"
,    VideoDurationSeconds11 = "VIDEO_DURATION_SECONDS_11"
,    VideoDurationSeconds12 = "VIDEO_DURATION_SECONDS_12"
,    VideoDurationSeconds13 = "VIDEO_DURATION_SECONDS_13"
,    VideoDurationSeconds14 = "VIDEO_DURATION_SECONDS_14"
,    VideoDurationSeconds15 = "VIDEO_DURATION_SECONDS_15"
,    VideoDurationSeconds30 = "VIDEO_DURATION_SECONDS_30"
,    VideoDurationSeconds45 = "VIDEO_DURATION_SECONDS_45"
,    VideoDurationSeconds60 = "VIDEO_DURATION_SECONDS_60"
}

export enum ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum {
    VideoDurationQuartileUnspecified = "VIDEO_DURATION_QUARTILE_UNSPECIFIED"
,    VideoDurationQuartileNone = "VIDEO_DURATION_QUARTILE_NONE"
,    VideoDurationQuartileFirst = "VIDEO_DURATION_QUARTILE_FIRST"
,    VideoDurationQuartileSecond = "VIDEO_DURATION_QUARTILE_SECOND"
,    VideoDurationQuartileThird = "VIDEO_DURATION_QUARTILE_THIRD"
,    VideoDurationQuartileFourth = "VIDEO_DURATION_QUARTILE_FOURTH"
}

export enum ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum {
    ViewabilityPercentUnspecified = "VIEWABILITY_PERCENT_UNSPECIFIED"
,    ViewabilityPercent0 = "VIEWABILITY_PERCENT_0"
,    ViewabilityPercent25 = "VIEWABILITY_PERCENT_25"
,    ViewabilityPercent50 = "VIEWABILITY_PERCENT_50"
,    ViewabilityPercent75 = "VIEWABILITY_PERCENT_75"
,    ViewabilityPercent100 = "VIEWABILITY_PERCENT_100"
}

export enum ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum {
    VideoVolumePercentUnspecified = "VIDEO_VOLUME_PERCENT_UNSPECIFIED"
,    VideoVolumePercent0 = "VIDEO_VOLUME_PERCENT_0"
,    VideoVolumePercent10 = "VIDEO_VOLUME_PERCENT_10"
}


// ActiveViewVideoViewabilityMetricConfig
/** 
 * Configuration for custom Active View video viewability metrics.
**/
export class ActiveViewVideoViewabilityMetricConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=minimumDuration" })
  minimumDuration?: ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum;

  @Metadata({ data: "json, name=minimumQuartile" })
  minimumQuartile?: ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum;

  @Metadata({ data: "json, name=minimumViewability" })
  minimumViewability?: ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum;

  @Metadata({ data: "json, name=minimumVolume" })
  minimumVolume?: ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum;
}

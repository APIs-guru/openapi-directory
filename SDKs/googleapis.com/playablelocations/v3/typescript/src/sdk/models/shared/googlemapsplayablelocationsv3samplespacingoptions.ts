import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum {
    PointTypeUnspecified = "POINT_TYPE_UNSPECIFIED"
,    CenterPoint = "CENTER_POINT"
,    SnappedPoint = "SNAPPED_POINT"
}


// GoogleMapsPlayablelocationsV3SampleSpacingOptions
/** 
 * A set of options that specifies the separation between playable locations.
**/
export class GoogleMapsPlayablelocationsV3SampleSpacingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=minSpacingMeters" })
  minSpacingMeters?: number;

  @Metadata({ data: "json, name=pointType" })
  pointType?: GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum;
}

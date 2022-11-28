import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClickThroughUrl } from "./clickthroughurl";
import { CompanionClickThroughOverride } from "./companionclickthroughoverride";
import { CreativeGroupAssignment } from "./creativegroupassignment";
import { DimensionValue } from "./dimensionvalue";
import { RichMediaExitOverride } from "./richmediaexitoverride";



// CreativeAssignment
/** 
 * Creative Assignment.
**/
export class CreativeAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=applyEventTags" })
  applyEventTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: ClickThroughUrl;

  @SpeakeasyMetadata({ data: "json, name=companionCreativeOverrides", elemType: CompanionClickThroughOverride })
  companionCreativeOverrides?: CompanionClickThroughOverride[];

  @SpeakeasyMetadata({ data: "json, name=creativeGroupAssignments", elemType: CreativeGroupAssignment })
  creativeGroupAssignments?: CreativeGroupAssignment[];

  @SpeakeasyMetadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeIdDimensionValue" })
  creativeIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=richMediaExitOverrides", elemType: RichMediaExitOverride })
  richMediaExitOverrides?: RichMediaExitOverride[];

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=sslCompliant" })
  sslCompliant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}

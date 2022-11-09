import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=applyEventTags" })
  applyEventTags?: boolean;

  @Metadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: ClickThroughUrl;

  @Metadata({ data: "json, name=companionCreativeOverrides", elemType: shared.CompanionClickThroughOverride })
  companionCreativeOverrides?: CompanionClickThroughOverride[];

  @Metadata({ data: "json, name=creativeGroupAssignments", elemType: shared.CreativeGroupAssignment })
  creativeGroupAssignments?: CreativeGroupAssignment[];

  @Metadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @Metadata({ data: "json, name=creativeIdDimensionValue" })
  creativeIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=richMediaExitOverrides", elemType: shared.RichMediaExitOverride })
  richMediaExitOverrides?: RichMediaExitOverride[];

  @Metadata({ data: "json, name=sequence" })
  sequence?: number;

  @Metadata({ data: "json, name=sslCompliant" })
  sslCompliant?: boolean;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}

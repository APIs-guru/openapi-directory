import { SpeakeasyBase } from "../../../internal/utils";
import { ClickThroughUrl } from "./clickthroughurl";
import { CompanionClickThroughOverride } from "./companionclickthroughoverride";
import { CreativeGroupAssignment } from "./creativegroupassignment";
import { DimensionValue } from "./dimensionvalue";
import { RichMediaExitOverride } from "./richmediaexitoverride";
/**
 * Creative Assignment.
**/
export declare class CreativeAssignment extends SpeakeasyBase {
    active?: boolean;
    applyEventTags?: boolean;
    clickThroughUrl?: ClickThroughUrl;
    companionCreativeOverrides?: CompanionClickThroughOverride[];
    creativeGroupAssignments?: CreativeGroupAssignment[];
    creativeId?: string;
    creativeIdDimensionValue?: DimensionValue;
    endTime?: Date;
    richMediaExitOverrides?: RichMediaExitOverride[];
    sequence?: number;
    sslCompliant?: boolean;
    startTime?: Date;
    weight?: number;
}

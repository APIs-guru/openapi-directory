import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`.
**/
export declare class RegionalLocationListAssignedTargetingOptionDetails extends SpeakeasyBase {
    negative?: boolean;
    regionalLocationListId?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`.
**/
export declare class KeywordAssignedTargetingOptionDetails extends SpeakeasyBase {
    keyword?: string;
    negative?: boolean;
}

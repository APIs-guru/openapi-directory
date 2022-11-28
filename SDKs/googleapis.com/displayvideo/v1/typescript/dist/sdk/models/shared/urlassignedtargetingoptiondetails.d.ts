import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`.
**/
export declare class UrlAssignedTargetingOptionDetails extends SpeakeasyBase {
    negative?: boolean;
    url?: string;
}

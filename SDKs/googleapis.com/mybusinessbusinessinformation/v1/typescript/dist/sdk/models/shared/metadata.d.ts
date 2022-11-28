import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional non-user-editable information about the location.
**/
export declare class Metadata extends SpeakeasyBase {
    canDelete?: boolean;
    canHaveBusinessCalls?: boolean;
    canHaveFoodMenus?: boolean;
    canModifyServiceList?: boolean;
    canOperateHealthData?: boolean;
    canOperateLocalPost?: boolean;
    canOperateLodgingData?: boolean;
    duplicateLocation?: string;
    hasGoogleUpdated?: boolean;
    hasPendingEdits?: boolean;
    hasVoiceOfMerchant?: boolean;
    mapsUri?: string;
    newReviewUri?: string;
    placeId?: string;
}

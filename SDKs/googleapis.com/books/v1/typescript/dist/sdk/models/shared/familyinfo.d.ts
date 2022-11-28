import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Family membership info of the user that made the request.
**/
export declare class FamilyInfoMembership extends SpeakeasyBase {
    acquirePermission?: string;
    ageGroup?: string;
    allowedMaturityRating?: string;
    isInFamily?: boolean;
    role?: string;
}
export declare class FamilyInfo extends SpeakeasyBase {
    kind?: string;
    membership?: FamilyInfoMembership;
}

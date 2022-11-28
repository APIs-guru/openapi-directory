import { SpeakeasyBase } from "../../../internal/utils";
import { Criteria } from "./criteria";
import { OpenBadgeClass } from "./openbadgeclass";
export declare class UserBadgeBadgeExpiry extends SpeakeasyBase {
    expirationDate?: Date;
    expires?: boolean;
}
export declare class UserBadge extends SpeakeasyBase {
    awardedAt?: Date;
    badgeExpiry?: UserBadgeBadgeExpiry;
    badgeUrl?: string;
    criterias?: Criteria;
    description?: string;
    offeringId?: string;
    openBadge?: OpenBadgeClass;
    title?: string;
}

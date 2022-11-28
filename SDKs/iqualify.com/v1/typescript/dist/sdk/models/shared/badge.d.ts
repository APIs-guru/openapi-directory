import { SpeakeasyBase } from "../../../internal/utils";
import { BadgeExpiry } from "./badgeexpiry";
import { Criteria } from "./criteria";
import { OpenBadgeClass } from "./openbadgeclass";
export declare class Badge extends SpeakeasyBase {
    badgeExpiry?: BadgeExpiry;
    badgeUrl?: string;
    criterias?: Criteria;
    description?: string;
    openBadge?: OpenBadgeClass;
    title?: string;
}

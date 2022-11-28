import { SpeakeasyBase } from "../../../internal/utils";
import { BadgeExpiry } from "./badgeexpiry";
export declare class OfferingBadge extends SpeakeasyBase {
    badgeExpiry?: BadgeExpiry;
    description?: string;
    requiresApproval?: boolean;
    title?: string;
}
export declare class OfferingMetadata1 extends SpeakeasyBase {
    category?: string;
    level?: string;
    tags?: string[];
    topic?: string;
}
export declare class Offering extends SpeakeasyBase {
    badge?: OfferingBadge;
    contentId?: string;
    description?: string;
    earlyCloseOffDate?: Date;
    end?: Date;
    hasEarlyCloseOff?: boolean;
    identifier?: string;
    isReadonly?: boolean;
    metadata?: OfferingMetadata1;
    name?: string;
    overview?: string;
    rootContentId?: string;
    start?: Date;
    trailerVideoUrl?: string;
    useRelativeDates?: boolean;
}

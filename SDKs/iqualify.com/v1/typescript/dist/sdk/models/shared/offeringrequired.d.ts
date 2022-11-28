import { SpeakeasyBase } from "../../../internal/utils";
import { BadgeExpiry } from "./badgeexpiry";
export declare class OfferingRequiredBadge extends SpeakeasyBase {
    badgeExpiry?: BadgeExpiry;
    description?: string;
    requiresApproval?: boolean;
    title?: string;
}
export declare class OfferingRequiredMetadata extends SpeakeasyBase {
    category?: string;
    level?: string;
    tags?: string[];
    topic?: string;
}
export declare class OfferingRequired extends SpeakeasyBase {
    badge?: OfferingRequiredBadge;
    contentId?: string;
    createDefaultChannels?: boolean;
    description?: string;
    earlyCloseOffDate?: Date;
    end?: Date;
    hasEarlyCloseOff?: boolean;
    identifier?: string;
    isReadonly?: boolean;
    metadata?: OfferingRequiredMetadata;
    name?: string;
    rootContentId?: string;
    start: Date;
    trailerVideoUrl?: string;
    useRelativeDates?: boolean;
}

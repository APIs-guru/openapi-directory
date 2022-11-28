import { SpeakeasyBase } from "../../../internal/utils";
import { OfferingMetadata } from "./offeringmetadata";
export declare class OfferingMetadataResponse extends SpeakeasyBase {
    contentId?: string;
    coverImageUrl?: string;
    currency?: string;
    description?: string;
    earlyCloseOffDate?: Date;
    end?: Date;
    enrollmentLimit?: number;
    hasEarlyCloseOff?: boolean;
    id?: string;
    identifier?: string;
    isReadonly?: boolean;
    metadata?: OfferingMetadata;
    name?: string;
    overview?: string;
    price?: number;
    start?: Date;
    tasksEnabled?: boolean;
    trailerVideoUrl?: string;
    useRelativeDates?: boolean;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { BackfillAllStrategy } from "./backfillallstrategy";
import { DestinationConfig } from "./destinationconfig";
import { Error } from "./error";
import { SourceConfig } from "./sourceconfig";
export declare enum StreamStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    NotStarted = "NOT_STARTED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Maintenance = "MAINTENANCE",
    Failed = "FAILED",
    FailedPermanently = "FAILED_PERMANENTLY",
    Starting = "STARTING",
    Draining = "DRAINING"
}
/**
 * A resource representing streaming data from a source to a destination.
**/
export declare class Stream extends SpeakeasyBase {
    backfillAll?: BackfillAllStrategy;
    backfillNone?: Map<string, any>;
    createTime?: string;
    customerManagedEncryptionKey?: string;
    destinationConfig?: DestinationConfig;
    displayName?: string;
    errors?: Error[];
    labels?: Map<string, string>;
    name?: string;
    sourceConfig?: SourceConfig;
    state?: StreamStateEnum;
    updateTime?: string;
}
/**
 * A resource representing streaming data from a source to a destination.
**/
export declare class StreamInput extends SpeakeasyBase {
    backfillAll?: BackfillAllStrategy;
    backfillNone?: Map<string, any>;
    customerManagedEncryptionKey?: string;
    destinationConfig?: DestinationConfig;
    displayName?: string;
    labels?: Map<string, string>;
    sourceConfig?: SourceConfig;
    state?: StreamStateEnum;
}

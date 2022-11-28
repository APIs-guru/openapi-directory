import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackfillAllStrategy } from "./backfillallstrategy";
import { DestinationConfig } from "./destinationconfig";
import { Error } from "./error";
import { SourceConfig } from "./sourceconfig";


export enum StreamStateEnum {
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


// Stream
/** 
 * A resource representing streaming data from a source to a destination.
**/
export class Stream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backfillAll" })
  backfillAll?: BackfillAllStrategy;

  @SpeakeasyMetadata({ data: "json, name=backfillNone" })
  backfillNone?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=customerManagedEncryptionKey" })
  customerManagedEncryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationConfig" })
  destinationConfig?: DestinationConfig;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceConfig" })
  sourceConfig?: SourceConfig;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StreamStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// StreamInput
/** 
 * A resource representing streaming data from a source to a destination.
**/
export class StreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backfillAll" })
  backfillAll?: BackfillAllStrategy;

  @SpeakeasyMetadata({ data: "json, name=backfillNone" })
  backfillNone?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=customerManagedEncryptionKey" })
  customerManagedEncryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationConfig" })
  destinationConfig?: DestinationConfig;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sourceConfig" })
  sourceConfig?: SourceConfig;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StreamStateEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackfillAllStrategy } from "./backfillallstrategy";
import { DestinationConfig } from "./destinationconfig";
import { Error } from "./error";
import { SourceConfig } from "./sourceconfig";

export enum StreamStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Created = "CREATED"
,    Running = "RUNNING"
,    Paused = "PAUSED"
,    Maintenance = "MAINTENANCE"
,    Failed = "FAILED"
,    FailedPermanently = "FAILED_PERMANENTLY"
,    Starting = "STARTING"
,    Draining = "DRAINING"
}


export class Stream extends SpeakeasyBase {
  @Metadata({ data: "json, name=backfillAll" })
  backfillAll?: BackfillAllStrategy;

  @Metadata({ data: "json, name=backfillNone" })
  backfillNone?: Map<string, any>;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=customerManagedEncryptionKey" })
  customerManagedEncryptionKey?: string;

  @Metadata({ data: "json, name=destinationConfig" })
  destinationConfig?: DestinationConfig;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sourceConfig" })
  sourceConfig?: SourceConfig;

  @Metadata({ data: "json, name=state" })
  state?: StreamStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StateCondition } from "./statecondition";
import { Destination } from "./destination";
import { EventFilter } from "./eventfilter";
import { Transport } from "./transport";


// Trigger
/** 
 * A representation of the trigger resource.
**/
export class Trigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: string;

  @Metadata({ data: "json, name=conditions", elemType: shared.StateCondition })
  conditions?: Map<string, StateCondition>;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: Destination;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=eventFilters", elemType: shared.EventFilter })
  eventFilters?: EventFilter[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=transport" })
  transport?: Transport;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

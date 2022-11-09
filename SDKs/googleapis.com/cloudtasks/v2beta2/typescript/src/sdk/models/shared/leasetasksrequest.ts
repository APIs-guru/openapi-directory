import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LeaseTasksRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


// LeaseTasksRequest
/** 
 * Request message for leasing tasks using LeaseTasks.
**/
export class LeaseTasksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=leaseDuration" })
  leaseDuration?: string;

  @Metadata({ data: "json, name=maxTasks" })
  maxTasks?: number;

  @Metadata({ data: "json, name=responseView" })
  responseView?: LeaseTasksRequestResponseViewEnum;
}

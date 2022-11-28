import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LeaseTasksRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


// LeaseTasksRequest
/** 
 * Request message for leasing tasks using LeaseTasks.
**/
export class LeaseTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=leaseDuration" })
  leaseDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=maxTasks" })
  maxTasks?: number;

  @SpeakeasyMetadata({ data: "json, name=responseView" })
  responseView?: LeaseTasksRequestResponseViewEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { EndCondition } from "./endcondition";



// Waiter
/** 
 * A Waiter resource waits for some end condition within a RuntimeConfig resource to be met before it returns. For example, assume you have a distributed system where each node writes to a Variable resource indicating the node's readiness as part of the startup process. You then configure a Waiter resource with the success condition set to wait until some number of nodes have checked in. Afterwards, your application runs some arbitrary code after the condition has been met and the waiter returns successfully. Once created, a Waiter resource is immutable. To learn more about using waiters, read the [Creating a Waiter](/deployment-manager/runtime-configurator/creating-a-waiter) documentation.
**/
export class Waiter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=done" })
  done?: boolean;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=failure" })
  failure?: EndCondition;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: EndCondition;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}

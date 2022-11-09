import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";
import { EndCondition } from "./endcondition";
import { EndCondition } from "./endcondition";


// Waiter
/** 
 * A Waiter resource waits for some end condition within a RuntimeConfig resource to be met before it returns. For example, assume you have a distributed system where each node writes to a Variable resource indicating the node's readiness as part of the startup process. You then configure a Waiter resource with the success condition set to wait until some number of nodes have checked in. Afterwards, your application runs some arbitrary code after the condition has been met and the waiter returns successfully. Once created, a Waiter resource is immutable. To learn more about using waiters, read the [Creating a Waiter](/deployment-manager/runtime-configurator/creating-a-waiter) documentation.
**/
export class Waiter extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=done" })
  done?: boolean;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=failure" })
  failure?: EndCondition;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=success" })
  success?: EndCondition;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}

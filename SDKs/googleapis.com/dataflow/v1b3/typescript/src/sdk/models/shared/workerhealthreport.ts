import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkerHealthReport
/** 
 * WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.
**/
export class WorkerHealthReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=msg" })
  msg?: string;

  @Metadata({ data: "json, name=pods" })
  pods?: Map<string, any>[];

  @Metadata({ data: "json, name=reportInterval" })
  reportInterval?: string;

  @Metadata({ data: "json, name=vmBrokenCode" })
  vmBrokenCode?: string;

  @Metadata({ data: "json, name=vmIsBroken" })
  vmIsBroken?: boolean;

  @Metadata({ data: "json, name=vmIsHealthy" })
  vmIsHealthy?: boolean;

  @Metadata({ data: "json, name=vmStartupTime" })
  vmStartupTime?: string;
}

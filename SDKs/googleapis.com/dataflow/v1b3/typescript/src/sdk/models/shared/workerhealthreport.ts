import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkerHealthReport
/** 
 * WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.
**/
export class WorkerHealthReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=msg" })
  msg?: string;

  @SpeakeasyMetadata({ data: "json, name=pods" })
  pods?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=reportInterval" })
  reportInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=vmBrokenCode" })
  vmBrokenCode?: string;

  @SpeakeasyMetadata({ data: "json, name=vmIsBroken" })
  vmIsBroken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vmIsHealthy" })
  vmIsHealthy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vmStartupTime" })
  vmStartupTime?: string;
}

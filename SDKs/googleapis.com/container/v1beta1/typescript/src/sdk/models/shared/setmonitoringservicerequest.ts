import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetMonitoringServiceRequest
/** 
 * SetMonitoringServiceRequest sets the monitoring service of a cluster.
**/
export class SetMonitoringServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=monitoringService" })
  monitoringService?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}

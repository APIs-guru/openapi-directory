import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetMonitoringServiceRequest
/** 
 * SetMonitoringServiceRequest sets the monitoring service of a cluster.
**/
export class SetMonitoringServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=monitoringService" })
  monitoringService?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}

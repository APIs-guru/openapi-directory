import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetLoggingServiceRequest
/** 
 * SetLoggingServiceRequest sets the logging service of a cluster.
**/
export class SetLoggingServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=loggingService" })
  loggingService?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}

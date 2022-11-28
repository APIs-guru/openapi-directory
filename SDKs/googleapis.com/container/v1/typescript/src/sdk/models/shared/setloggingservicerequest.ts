import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetLoggingServiceRequest
/** 
 * SetLoggingServiceRequest sets the logging service of a cluster.
**/
export class SetLoggingServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=loggingService" })
  loggingService?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}

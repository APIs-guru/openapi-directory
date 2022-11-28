import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BasicService
/** 
 * A well-known service type, defined by its service type and service labels. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli).
**/
export class BasicService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceLabels" })
  serviceLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=serviceType" })
  serviceType?: string;
}

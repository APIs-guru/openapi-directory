import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManagedService
/** 
 * The full representation of a Service that is managed by Google Service Management.
**/
export class ManagedService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=producerProjectId" })
  producerProjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}

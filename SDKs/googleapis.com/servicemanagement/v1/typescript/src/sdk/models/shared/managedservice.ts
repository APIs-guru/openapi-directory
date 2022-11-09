import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ManagedService
/** 
 * The full representation of a Service that is managed by Google Service Management.
**/
export class ManagedService extends SpeakeasyBase {
  @Metadata({ data: "json, name=producerProjectId" })
  producerProjectId?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceMeshStatusDetails
/** 
 * Structured and human-readable details for a status.
**/
export class ServiceMeshStatusDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=details" })
  details?: string;
}

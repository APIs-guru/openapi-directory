import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceMeshStatusDetails
/** 
 * Structured and human-readable details for a status.
**/
export class ServiceMeshStatusDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;
}

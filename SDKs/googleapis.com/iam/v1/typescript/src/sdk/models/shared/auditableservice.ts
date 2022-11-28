import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuditableService
/** 
 * Contains information about an auditable service.
**/
export class AuditableService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

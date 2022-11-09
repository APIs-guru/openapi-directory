import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuditableService
/** 
 * Contains information about an auditable service.
**/
export class AuditableService extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}

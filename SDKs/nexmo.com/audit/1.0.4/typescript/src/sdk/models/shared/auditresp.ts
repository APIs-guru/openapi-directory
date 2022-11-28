import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditEvent } from "./auditevent";
import { PaginationLinks } from "./paginationlinks";
import { PaginationData } from "./paginationdata";



// AuditRespEmbedded
/** 
 * Container containing the `events` array.
**/
export class AuditRespEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: AuditEvent })
  events?: AuditEvent[];
}


export class AuditResp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: AuditRespEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: PaginationLinks;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: PaginationData;
}

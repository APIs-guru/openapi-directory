import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditEvent } from "./auditevent";
import { PaginationLinks } from "./paginationlinks";
import { PaginationData } from "./paginationdata";


// AuditRespEmbedded
/** 
 * Container containing the `events` array.
**/
export class AuditRespEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=events", elemType: shared.AuditEvent })
  events?: AuditEvent[];
}


export class AuditResp extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: AuditRespEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: PaginationLinks;

  @Metadata({ data: "json, name=page" })
  page?: PaginationData;
}

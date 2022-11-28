import { SpeakeasyBase } from "../../../internal/utils";
import { AuditEvent } from "./auditevent";
import { PaginationLinks } from "./paginationlinks";
import { PaginationData } from "./paginationdata";
/**
 * Container containing the `events` array.
**/
export declare class AuditRespEmbedded extends SpeakeasyBase {
    events?: AuditEvent[];
}
export declare class AuditResp extends SpeakeasyBase {
    embedded?: AuditRespEmbedded;
    links?: PaginationLinks;
    page?: PaginationData;
}

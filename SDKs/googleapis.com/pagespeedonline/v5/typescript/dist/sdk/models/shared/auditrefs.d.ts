import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A light reference to an audit by id, used to group and weight audits in a given category.
**/
export declare class AuditRefs extends SpeakeasyBase {
    acronym?: string;
    group?: string;
    id?: string;
    relevantAudits?: string[];
    weight?: number;
}

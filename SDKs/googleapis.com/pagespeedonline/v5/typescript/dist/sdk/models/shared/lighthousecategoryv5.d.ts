import { SpeakeasyBase } from "../../../internal/utils";
import { AuditRefs } from "./auditrefs";
/**
 * A Lighthouse category.
**/
export declare class LighthouseCategoryV5 extends SpeakeasyBase {
    auditRefs?: AuditRefs[];
    description?: string;
    id?: string;
    manualDescription?: string;
    score?: any;
    title?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1Index } from "./googlefirestoreadminv1index";
/**
 * The index configuration for this field.
**/
export declare class GoogleFirestoreAdminV1IndexConfig extends SpeakeasyBase {
    ancestorField?: string;
    indexes?: GoogleFirestoreAdminV1Index[];
    reverting?: boolean;
    usesAncestorConfig?: boolean;
}

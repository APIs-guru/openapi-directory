import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta2Index } from "./googlefirestoreadminv1beta2index";
/**
 * The index configuration for this field.
**/
export declare class GoogleFirestoreAdminV1beta2IndexConfig extends SpeakeasyBase {
    ancestorField?: string;
    indexes?: GoogleFirestoreAdminV1beta2Index[];
    reverting?: boolean;
    usesAncestorConfig?: boolean;
}

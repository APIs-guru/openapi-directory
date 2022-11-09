import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirestoreAdminV1beta2IndexConfig } from "./googlefirestoreadminv1beta2indexconfig";
/**
 * Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.
**/
export declare class GoogleFirestoreAdminV1beta2Field extends SpeakeasyBase {
    indexConfig?: GoogleFirestoreAdminV1beta2IndexConfig;
    name?: string;
}

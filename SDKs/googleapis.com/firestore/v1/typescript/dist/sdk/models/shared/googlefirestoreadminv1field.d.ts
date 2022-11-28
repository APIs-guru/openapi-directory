import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1IndexConfig } from "./googlefirestoreadminv1indexconfig";
import { GoogleFirestoreAdminV1TtlConfig } from "./googlefirestoreadminv1ttlconfig";
/**
 * Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.
**/
export declare class GoogleFirestoreAdminV1Field extends SpeakeasyBase {
    indexConfig?: GoogleFirestoreAdminV1IndexConfig;
    name?: string;
    ttlConfig?: GoogleFirestoreAdminV1TtlConfig;
}

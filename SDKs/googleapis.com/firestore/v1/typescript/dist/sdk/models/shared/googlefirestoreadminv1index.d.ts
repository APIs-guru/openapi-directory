import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1IndexField } from "./googlefirestoreadminv1indexfield";
export declare enum GoogleFirestoreAdminV1IndexApiScopeEnum {
    AnyApi = "ANY_API",
    DatastoreModeApi = "DATASTORE_MODE_API"
}
export declare enum GoogleFirestoreAdminV1IndexQueryScopeEnum {
    QueryScopeUnspecified = "QUERY_SCOPE_UNSPECIFIED",
    Collection = "COLLECTION",
    CollectionGroup = "COLLECTION_GROUP",
    CollectionRecursive = "COLLECTION_RECURSIVE"
}
export declare enum GoogleFirestoreAdminV1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    NeedsRepair = "NEEDS_REPAIR"
}
/**
 * Cloud Firestore indexes enable simple and complex queries against documents in a database.
**/
export declare class GoogleFirestoreAdminV1Index extends SpeakeasyBase {
    apiScope?: GoogleFirestoreAdminV1IndexApiScopeEnum;
    fields?: GoogleFirestoreAdminV1IndexField[];
    name?: string;
    queryScope?: GoogleFirestoreAdminV1IndexQueryScopeEnum;
    state?: GoogleFirestoreAdminV1IndexStateEnum;
}

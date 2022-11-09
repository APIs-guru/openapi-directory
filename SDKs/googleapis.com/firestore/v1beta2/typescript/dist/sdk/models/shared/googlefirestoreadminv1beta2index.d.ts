import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirestoreAdminV1beta2IndexField } from "./googlefirestoreadminv1beta2indexfield";
export declare enum GoogleFirestoreAdminV1beta2IndexQueryScopeEnum {
    QueryScopeUnspecified = "QUERY_SCOPE_UNSPECIFIED",
    Collection = "COLLECTION",
    CollectionGroup = "COLLECTION_GROUP"
}
export declare enum GoogleFirestoreAdminV1beta2IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    NeedsRepair = "NEEDS_REPAIR"
}
/**
 * Cloud Firestore indexes enable simple and complex queries against documents in a database.
**/
export declare class GoogleFirestoreAdminV1beta2Index extends SpeakeasyBase {
    fields?: GoogleFirestoreAdminV1beta2IndexField[];
    name?: string;
    queryScope?: GoogleFirestoreAdminV1beta2IndexQueryScopeEnum;
    state?: GoogleFirestoreAdminV1beta2IndexStateEnum;
}

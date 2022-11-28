import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1IndexField } from "./googlefirestoreadminv1indexfield";


export enum GoogleFirestoreAdminV1IndexApiScopeEnum {
    AnyApi = "ANY_API",
    DatastoreModeApi = "DATASTORE_MODE_API"
}

export enum GoogleFirestoreAdminV1IndexQueryScopeEnum {
    QueryScopeUnspecified = "QUERY_SCOPE_UNSPECIFIED",
    Collection = "COLLECTION",
    CollectionGroup = "COLLECTION_GROUP",
    CollectionRecursive = "COLLECTION_RECURSIVE"
}

export enum GoogleFirestoreAdminV1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    NeedsRepair = "NEEDS_REPAIR"
}


// GoogleFirestoreAdminV1Index
/** 
 * Cloud Firestore indexes enable simple and complex queries against documents in a database.
**/
export class GoogleFirestoreAdminV1Index extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiScope" })
  apiScope?: GoogleFirestoreAdminV1IndexApiScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleFirestoreAdminV1IndexField })
  fields?: GoogleFirestoreAdminV1IndexField[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=queryScope" })
  queryScope?: GoogleFirestoreAdminV1IndexQueryScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleFirestoreAdminV1IndexStateEnum;
}

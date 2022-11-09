import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirestoreAdminV1IndexField } from "./googlefirestoreadminv1indexfield";

export enum GoogleFirestoreAdminV1IndexQueryScopeEnum {
    QueryScopeUnspecified = "QUERY_SCOPE_UNSPECIFIED"
,    Collection = "COLLECTION"
,    CollectionGroup = "COLLECTION_GROUP"
}

export enum GoogleFirestoreAdminV1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    NeedsRepair = "NEEDS_REPAIR"
}


// GoogleFirestoreAdminV1Index
/** 
 * Cloud Firestore indexes enable simple and complex queries against documents in a database.
**/
export class GoogleFirestoreAdminV1Index extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.GoogleFirestoreAdminV1IndexField })
  fields?: GoogleFirestoreAdminV1IndexField[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=queryScope" })
  queryScope?: GoogleFirestoreAdminV1IndexQueryScopeEnum;

  @Metadata({ data: "json, name=state" })
  state?: GoogleFirestoreAdminV1IndexStateEnum;
}

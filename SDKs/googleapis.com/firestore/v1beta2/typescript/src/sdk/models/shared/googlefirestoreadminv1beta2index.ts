import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirestoreAdminV1beta2IndexField } from "./googlefirestoreadminv1beta2indexfield";

export enum GoogleFirestoreAdminV1beta2IndexQueryScopeEnum {
    QueryScopeUnspecified = "QUERY_SCOPE_UNSPECIFIED"
,    Collection = "COLLECTION"
,    CollectionGroup = "COLLECTION_GROUP"
}

export enum GoogleFirestoreAdminV1beta2IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    NeedsRepair = "NEEDS_REPAIR"
}


// GoogleFirestoreAdminV1beta2Index
/** 
 * Cloud Firestore indexes enable simple and complex queries against documents in a database.
**/
export class GoogleFirestoreAdminV1beta2Index extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.GoogleFirestoreAdminV1beta2IndexField })
  fields?: GoogleFirestoreAdminV1beta2IndexField[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=queryScope" })
  queryScope?: GoogleFirestoreAdminV1beta2IndexQueryScopeEnum;

  @Metadata({ data: "json, name=state" })
  state?: GoogleFirestoreAdminV1beta2IndexStateEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirestoreAdminV1beta1IndexField } from "./googlefirestoreadminv1beta1indexfield";

export enum GoogleFirestoreAdminV1beta1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Error = "ERROR"
}


// GoogleFirestoreAdminV1beta1Index
/** 
 * An index definition.
**/
export class GoogleFirestoreAdminV1beta1Index extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionId" })
  collectionId?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.GoogleFirestoreAdminV1beta1IndexField })
  fields?: GoogleFirestoreAdminV1beta1IndexField[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleFirestoreAdminV1beta1IndexStateEnum;
}

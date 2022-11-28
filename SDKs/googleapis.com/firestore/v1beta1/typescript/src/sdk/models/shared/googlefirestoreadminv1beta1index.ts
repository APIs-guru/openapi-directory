import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta1IndexField } from "./googlefirestoreadminv1beta1indexfield";


export enum GoogleFirestoreAdminV1beta1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Error = "ERROR"
}


// GoogleFirestoreAdminV1beta1Index
/** 
 * An index definition.
**/
export class GoogleFirestoreAdminV1beta1Index extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionId" })
  collectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleFirestoreAdminV1beta1IndexField })
  fields?: GoogleFirestoreAdminV1beta1IndexField[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleFirestoreAdminV1beta1IndexStateEnum;
}

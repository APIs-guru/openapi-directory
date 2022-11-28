import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta1IndexField } from "./googlefirestoreadminv1beta1indexfield";
export declare enum GoogleFirestoreAdminV1beta1IndexStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Error = "ERROR"
}
/**
 * An index definition.
**/
export declare class GoogleFirestoreAdminV1beta1Index extends SpeakeasyBase {
    collectionId?: string;
    fields?: GoogleFirestoreAdminV1beta1IndexField[];
    name?: string;
    state?: GoogleFirestoreAdminV1beta1IndexStateEnum;
}

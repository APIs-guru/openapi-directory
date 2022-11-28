import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta2IndexConfig } from "./googlefirestoreadminv1beta2indexconfig";



// GoogleFirestoreAdminV1beta2Field
/** 
 * Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.
**/
export class GoogleFirestoreAdminV1beta2Field extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexConfig" })
  indexConfig?: GoogleFirestoreAdminV1beta2IndexConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

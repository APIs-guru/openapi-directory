import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1IndexConfig } from "./googlefirestoreadminv1indexconfig";
import { GoogleFirestoreAdminV1TtlConfig } from "./googlefirestoreadminv1ttlconfig";



// GoogleFirestoreAdminV1Field
/** 
 * Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.
**/
export class GoogleFirestoreAdminV1Field extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexConfig" })
  indexConfig?: GoogleFirestoreAdminV1IndexConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ttlConfig" })
  ttlConfig?: GoogleFirestoreAdminV1TtlConfig;
}

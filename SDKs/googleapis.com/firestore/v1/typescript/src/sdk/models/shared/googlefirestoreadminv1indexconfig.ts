import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1Index } from "./googlefirestoreadminv1index";



// GoogleFirestoreAdminV1IndexConfig
/** 
 * The index configuration for this field.
**/
export class GoogleFirestoreAdminV1IndexConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ancestorField" })
  ancestorField?: string;

  @SpeakeasyMetadata({ data: "json, name=indexes", elemType: GoogleFirestoreAdminV1Index })
  indexes?: GoogleFirestoreAdminV1Index[];

  @SpeakeasyMetadata({ data: "json, name=reverting" })
  reverting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usesAncestorConfig" })
  usesAncestorConfig?: boolean;
}

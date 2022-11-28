import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta2Index } from "./googlefirestoreadminv1beta2index";



// GoogleFirestoreAdminV1beta2IndexConfig
/** 
 * The index configuration for this field.
**/
export class GoogleFirestoreAdminV1beta2IndexConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ancestorField" })
  ancestorField?: string;

  @SpeakeasyMetadata({ data: "json, name=indexes", elemType: GoogleFirestoreAdminV1beta2Index })
  indexes?: GoogleFirestoreAdminV1beta2Index[];

  @SpeakeasyMetadata({ data: "json, name=reverting" })
  reverting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usesAncestorConfig" })
  usesAncestorConfig?: boolean;
}

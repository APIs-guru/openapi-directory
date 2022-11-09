import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirestoreAdminV1beta2Index } from "./googlefirestoreadminv1beta2index";


// GoogleFirestoreAdminV1beta2IndexConfig
/** 
 * The index configuration for this field.
**/
export class GoogleFirestoreAdminV1beta2IndexConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ancestorField" })
  ancestorField?: string;

  @Metadata({ data: "json, name=indexes", elemType: shared.GoogleFirestoreAdminV1beta2Index })
  indexes?: GoogleFirestoreAdminV1beta2Index[];

  @Metadata({ data: "json, name=reverting" })
  reverting?: boolean;

  @Metadata({ data: "json, name=usesAncestorConfig" })
  usesAncestorConfig?: boolean;
}

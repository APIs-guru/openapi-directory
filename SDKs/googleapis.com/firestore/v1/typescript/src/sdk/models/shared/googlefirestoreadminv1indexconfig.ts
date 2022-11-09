import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirestoreAdminV1Index } from "./googlefirestoreadminv1index";


// GoogleFirestoreAdminV1IndexConfig
/** 
 * The index configuration for this field.
**/
export class GoogleFirestoreAdminV1IndexConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=ancestorField" })
  ancestorField?: string;

  @Metadata({ data: "json, name=indexes", elemType: shared.GoogleFirestoreAdminV1Index })
  indexes?: GoogleFirestoreAdminV1Index[];

  @Metadata({ data: "json, name=reverting" })
  reverting?: boolean;

  @Metadata({ data: "json, name=usesAncestorConfig" })
  usesAncestorConfig?: boolean;
}

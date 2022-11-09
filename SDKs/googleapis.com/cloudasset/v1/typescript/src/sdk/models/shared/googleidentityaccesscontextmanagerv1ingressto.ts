import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleIdentityAccesscontextmanagerV1ApiOperation } from "./googleidentityaccesscontextmanagerv1apioperation";


// GoogleIdentityAccesscontextmanagerV1IngressTo
/** 
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match.
**/
export class GoogleIdentityAccesscontextmanagerV1IngressTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=operations", elemType: shared.GoogleIdentityAccesscontextmanagerV1ApiOperation })
  operations?: GoogleIdentityAccesscontextmanagerV1ApiOperation[];

  @Metadata({ data: "json, name=resources" })
  resources?: string[];
}

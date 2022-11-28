import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1ApiOperation } from "./googleidentityaccesscontextmanagerv1apioperation";



// GoogleIdentityAccesscontextmanagerV1IngressTo
/** 
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match.
**/
export class GoogleIdentityAccesscontextmanagerV1IngressTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operations", elemType: GoogleIdentityAccesscontextmanagerV1ApiOperation })
  operations?: GoogleIdentityAccesscontextmanagerV1ApiOperation[];

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];
}

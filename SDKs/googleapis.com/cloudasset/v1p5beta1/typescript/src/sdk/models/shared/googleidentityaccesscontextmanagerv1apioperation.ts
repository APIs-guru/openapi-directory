import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1MethodSelector } from "./googleidentityaccesscontextmanagerv1methodselector";



// GoogleIdentityAccesscontextmanagerV1ApiOperation
/** 
 * Identification for an API Operation.
**/
export class GoogleIdentityAccesscontextmanagerV1ApiOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=methodSelectors", elemType: GoogleIdentityAccesscontextmanagerV1MethodSelector })
  methodSelectors?: GoogleIdentityAccesscontextmanagerV1MethodSelector[];

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}

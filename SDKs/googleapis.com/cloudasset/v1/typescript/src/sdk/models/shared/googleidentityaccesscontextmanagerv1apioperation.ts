import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleIdentityAccesscontextmanagerV1MethodSelector } from "./googleidentityaccesscontextmanagerv1methodselector";


// GoogleIdentityAccesscontextmanagerV1ApiOperation
/** 
 * Identification for an API Operation.
**/
export class GoogleIdentityAccesscontextmanagerV1ApiOperation extends SpeakeasyBase {
  @Metadata({ data: "json, name=methodSelectors", elemType: shared.GoogleIdentityAccesscontextmanagerV1MethodSelector })
  methodSelectors?: GoogleIdentityAccesscontextmanagerV1MethodSelector[];

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}

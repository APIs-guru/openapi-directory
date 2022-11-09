import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleIdentityAccesscontextmanagerV1Condition } from "./googleidentityaccesscontextmanagerv1condition";

export enum GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum {
    And = "AND"
,    Or = "OR"
}


// GoogleIdentityAccesscontextmanagerV1BasicLevel
/** 
 * `BasicLevel` is an `AccessLevel` using a set of recommended features.
**/
export class GoogleIdentityAccesscontextmanagerV1BasicLevel extends SpeakeasyBase {
  @Metadata({ data: "json, name=combiningFunction" })
  combiningFunction?: GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum;

  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleIdentityAccesscontextmanagerV1Condition })
  conditions?: GoogleIdentityAccesscontextmanagerV1Condition[];
}

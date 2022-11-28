import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1Condition } from "./googleidentityaccesscontextmanagerv1condition";


export enum GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum {
    And = "AND",
    Or = "OR"
}


// GoogleIdentityAccesscontextmanagerV1BasicLevel
/** 
 * `BasicLevel` is an `AccessLevel` using a set of recommended features.
**/
export class GoogleIdentityAccesscontextmanagerV1BasicLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=combiningFunction" })
  combiningFunction?: GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleIdentityAccesscontextmanagerV1Condition })
  conditions?: GoogleIdentityAccesscontextmanagerV1Condition[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";



// CertificateIdentityConstraints
/** 
 * Describes constraints on a Certificate's Subject and SubjectAltNames.
**/
export class CertificateIdentityConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowSubjectAltNamesPassthrough" })
  allowSubjectAltNamesPassthrough?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowSubjectPassthrough" })
  allowSubjectPassthrough?: boolean;

  @SpeakeasyMetadata({ data: "json, name=celExpression" })
  celExpression?: Expr;
}

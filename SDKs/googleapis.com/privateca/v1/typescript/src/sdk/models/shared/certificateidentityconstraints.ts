import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Expr } from "./expr";


// CertificateIdentityConstraints
/** 
 * Describes constraints on a Certificate's Subject and SubjectAltNames.
**/
export class CertificateIdentityConstraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowSubjectAltNamesPassthrough" })
  allowSubjectAltNamesPassthrough?: boolean;

  @Metadata({ data: "json, name=allowSubjectPassthrough" })
  allowSubjectPassthrough?: boolean;

  @Metadata({ data: "json, name=celExpression" })
  celExpression?: Expr;
}

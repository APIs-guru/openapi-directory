import { SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
/**
 * Describes constraints on a Certificate's Subject and SubjectAltNames.
**/
export declare class CertificateIdentityConstraints extends SpeakeasyBase {
    allowSubjectAltNamesPassthrough?: boolean;
    allowSubjectPassthrough?: boolean;
    celExpression?: Expr;
}

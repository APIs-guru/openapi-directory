import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IssuanceModes } from "./issuancemodes";
import { AllowedKeyType } from "./allowedkeytype";
import { X509Parameters } from "./x509parameters";
import { CertificateIdentityConstraints } from "./certificateidentityconstraints";
import { CertificateExtensionConstraints } from "./certificateextensionconstraints";


// IssuancePolicy
/** 
 * Defines controls over all certificate issuance within a CaPool.
**/
export class IssuancePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedIssuanceModes" })
  allowedIssuanceModes?: IssuanceModes;

  @Metadata({ data: "json, name=allowedKeyTypes", elemType: shared.AllowedKeyType })
  allowedKeyTypes?: AllowedKeyType[];

  @Metadata({ data: "json, name=baselineValues" })
  baselineValues?: X509Parameters;

  @Metadata({ data: "json, name=identityConstraints" })
  identityConstraints?: CertificateIdentityConstraints;

  @Metadata({ data: "json, name=maximumLifetime" })
  maximumLifetime?: string;

  @Metadata({ data: "json, name=passthroughExtensions" })
  passthroughExtensions?: CertificateExtensionConstraints;
}

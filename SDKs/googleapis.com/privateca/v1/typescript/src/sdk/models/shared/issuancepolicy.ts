import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=allowedIssuanceModes" })
  allowedIssuanceModes?: IssuanceModes;

  @SpeakeasyMetadata({ data: "json, name=allowedKeyTypes", elemType: AllowedKeyType })
  allowedKeyTypes?: AllowedKeyType[];

  @SpeakeasyMetadata({ data: "json, name=baselineValues" })
  baselineValues?: X509Parameters;

  @SpeakeasyMetadata({ data: "json, name=identityConstraints" })
  identityConstraints?: CertificateIdentityConstraints;

  @SpeakeasyMetadata({ data: "json, name=maximumLifetime" })
  maximumLifetime?: string;

  @SpeakeasyMetadata({ data: "json, name=passthroughExtensions" })
  passthroughExtensions?: CertificateExtensionConstraints;
}

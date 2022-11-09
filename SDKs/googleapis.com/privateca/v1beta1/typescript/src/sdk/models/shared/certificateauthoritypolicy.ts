import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AllowedConfigList } from "./allowedconfiglist";
import { IssuanceModes } from "./issuancemodes";
import { Subject } from "./subject";
import { AllowedSubjectAltNames } from "./allowedsubjectaltnames";
import { ReusableConfigWrapper } from "./reusableconfigwrapper";


// CertificateAuthorityPolicy
/** 
 * The issuing policy for a CertificateAuthority. Certificates will not be successfully issued from this CertificateAuthority if they violate the policy.
**/
export class CertificateAuthorityPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedCommonNames" })
  allowedCommonNames?: string[];

  @Metadata({ data: "json, name=allowedConfigList" })
  allowedConfigList?: AllowedConfigList;

  @Metadata({ data: "json, name=allowedIssuanceModes" })
  allowedIssuanceModes?: IssuanceModes;

  @Metadata({ data: "json, name=allowedLocationsAndOrganizations", elemType: shared.Subject })
  allowedLocationsAndOrganizations?: Subject[];

  @Metadata({ data: "json, name=allowedSans" })
  allowedSans?: AllowedSubjectAltNames;

  @Metadata({ data: "json, name=maximumLifetime" })
  maximumLifetime?: string;

  @Metadata({ data: "json, name=overwriteConfigValues" })
  overwriteConfigValues?: ReusableConfigWrapper;
}

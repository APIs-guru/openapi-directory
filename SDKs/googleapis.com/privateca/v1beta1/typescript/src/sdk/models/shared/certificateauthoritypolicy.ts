import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=allowedCommonNames" })
  allowedCommonNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=allowedConfigList" })
  allowedConfigList?: AllowedConfigList;

  @SpeakeasyMetadata({ data: "json, name=allowedIssuanceModes" })
  allowedIssuanceModes?: IssuanceModes;

  @SpeakeasyMetadata({ data: "json, name=allowedLocationsAndOrganizations", elemType: Subject })
  allowedLocationsAndOrganizations?: Subject[];

  @SpeakeasyMetadata({ data: "json, name=allowedSans" })
  allowedSans?: AllowedSubjectAltNames;

  @SpeakeasyMetadata({ data: "json, name=maximumLifetime" })
  maximumLifetime?: string;

  @SpeakeasyMetadata({ data: "json, name=overwriteConfigValues" })
  overwriteConfigValues?: ReusableConfigWrapper;
}

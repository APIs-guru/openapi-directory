import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedConfigList } from "./allowedconfiglist";
import { IssuanceModes } from "./issuancemodes";
import { Subject } from "./subject";
import { AllowedSubjectAltNames } from "./allowedsubjectaltnames";
import { ReusableConfigWrapper } from "./reusableconfigwrapper";
/**
 * The issuing policy for a CertificateAuthority. Certificates will not be successfully issued from this CertificateAuthority if they violate the policy.
**/
export declare class CertificateAuthorityPolicy extends SpeakeasyBase {
    allowedCommonNames?: string[];
    allowedConfigList?: AllowedConfigList;
    allowedIssuanceModes?: IssuanceModes;
    allowedLocationsAndOrganizations?: Subject[];
    allowedSans?: AllowedSubjectAltNames;
    maximumLifetime?: string;
    overwriteConfigValues?: ReusableConfigWrapper;
}

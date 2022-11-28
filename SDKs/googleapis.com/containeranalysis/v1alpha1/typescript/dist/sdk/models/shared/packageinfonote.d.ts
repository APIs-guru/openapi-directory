import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalRef } from "./externalref";
import { License } from "./license";
/**
 * PackageInfoNote represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
**/
export declare class PackageInfoNote extends SpeakeasyBase {
    analyzed?: boolean;
    attribution?: string;
    checksum?: string;
    copyright?: string;
    detailedDescription?: string;
    downloadLocation?: string;
    externalRefs?: ExternalRef[];
    filesLicenseInfo?: string[];
    homePage?: string;
    licenseDeclared?: License;
    originator?: string;
    packageType?: string;
    summaryDescription?: string;
    supplier?: string;
    title?: string;
    verificationCode?: string;
    version?: string;
}

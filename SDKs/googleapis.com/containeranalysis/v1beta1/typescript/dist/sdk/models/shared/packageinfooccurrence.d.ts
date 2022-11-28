import { SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";
/**
 * PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
**/
export declare class PackageInfoOccurrence extends SpeakeasyBase {
    comment?: string;
    filename?: string;
    homePage?: string;
    id?: string;
    licenseConcluded?: License;
    packageType?: string;
    sourceInfo?: string;
    summaryDescription?: string;
    title?: string;
    version?: string;
}
/**
 * PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
**/
export declare class PackageInfoOccurrenceInput extends SpeakeasyBase {
    comment?: string;
    filename?: string;
    id?: string;
    licenseConcluded?: License;
    sourceInfo?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";
/**
 * FileOccurrence represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/
**/
export declare class FileOccurrence extends SpeakeasyBase {
    attributions?: string[];
    comment?: string;
    contributors?: string[];
    copyright?: string;
    filesLicenseInfo?: string[];
    id?: string;
    licenseConcluded?: License;
    notice?: string;
}

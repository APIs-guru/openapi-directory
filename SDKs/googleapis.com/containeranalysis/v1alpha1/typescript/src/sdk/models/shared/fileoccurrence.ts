import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { License } from "./license";


// FileOccurrence
/** 
 * FileOccurrence represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/
**/
export class FileOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributions" })
  attributions?: string[];

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=contributors" })
  contributors?: string[];

  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=filesLicenseInfo" })
  filesLicenseInfo?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=licenseConcluded" })
  licenseConcluded?: License;

  @Metadata({ data: "json, name=notice" })
  notice?: string;
}

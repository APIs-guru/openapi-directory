import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";



// FileOccurrence
/** 
 * FileOccurrence represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/
**/
export class FileOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributions" })
  attributions?: string[];

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=contributors" })
  contributors?: string[];

  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=filesLicenseInfo" })
  filesLicenseInfo?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=licenseConcluded" })
  licenseConcluded?: License;

  @SpeakeasyMetadata({ data: "json, name=notice" })
  notice?: string;
}

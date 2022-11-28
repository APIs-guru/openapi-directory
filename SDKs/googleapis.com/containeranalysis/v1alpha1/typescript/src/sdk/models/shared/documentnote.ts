import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentNote
/** 
 * DocumentNote represents an SPDX Document Creation Infromation section: https://spdx.github.io/spdx-spec/2-document-creation-information/
**/
export class DocumentNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataLicence" })
  dataLicence?: string;

  @SpeakeasyMetadata({ data: "json, name=spdxVersion" })
  spdxVersion?: string;
}

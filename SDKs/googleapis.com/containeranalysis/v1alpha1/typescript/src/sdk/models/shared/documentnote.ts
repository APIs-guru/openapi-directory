import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentNote
/** 
 * DocumentNote represents an SPDX Document Creation Infromation section: https://spdx.github.io/spdx-spec/2-document-creation-information/
**/
export class DocumentNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataLicence" })
  dataLicence?: string;

  @Metadata({ data: "json, name=spdxVersion" })
  spdxVersion?: string;
}

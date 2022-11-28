import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentOccurrence
/** 
 * DocumentOccurrence represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/
**/
export class DocumentOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorComment" })
  creatorComment?: string;

  @SpeakeasyMetadata({ data: "json, name=creators" })
  creators?: string[];

  @SpeakeasyMetadata({ data: "json, name=documentComment" })
  documentComment?: string;

  @SpeakeasyMetadata({ data: "json, name=externalDocumentRefs" })
  externalDocumentRefs?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=licenseListVersion" })
  licenseListVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

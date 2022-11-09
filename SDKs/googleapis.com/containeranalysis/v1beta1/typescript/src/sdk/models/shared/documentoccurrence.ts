import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentOccurrence
/** 
 * DocumentOccurrence represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/
**/
export class DocumentOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creatorComment" })
  creatorComment?: string;

  @Metadata({ data: "json, name=creators" })
  creators?: string[];

  @Metadata({ data: "json, name=documentComment" })
  documentComment?: string;

  @Metadata({ data: "json, name=externalDocumentRefs" })
  externalDocumentRefs?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=licenseListVersion" })
  licenseListVersion?: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}

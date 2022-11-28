import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DocumentOccurrence represents an SPDX Document Creation Information section: https://spdx.github.io/spdx-spec/2-document-creation-information/
**/
export declare class DocumentOccurrence extends SpeakeasyBase {
    createTime?: string;
    creatorComment?: string;
    creators?: string[];
    documentComment?: string;
    externalDocumentRefs?: string[];
    id?: string;
    licenseListVersion?: string;
    namespace?: string;
    title?: string;
}

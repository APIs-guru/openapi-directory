import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2CloudStorageRegexFileSet } from "./googleprivacydlpv2cloudstorageregexfileset";


// GooglePrivacyDlpV2FileSet
/** 
 * Set of files to scan.
**/
export class GooglePrivacyDlpV2FileSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=regexFileSet" })
  regexFileSet?: GooglePrivacyDlpV2CloudStorageRegexFileSet;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

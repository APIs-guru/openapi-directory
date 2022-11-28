import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CloudStorageRegexFileSet } from "./googleprivacydlpv2cloudstorageregexfileset";



// GooglePrivacyDlpV2FileSet
/** 
 * Set of files to scan.
**/
export class GooglePrivacyDlpV2FileSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regexFileSet" })
  regexFileSet?: GooglePrivacyDlpV2CloudStorageRegexFileSet;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2StoredType
/** 
 * A reference to a StoredInfoType to use with scanning.
**/
export class GooglePrivacyDlpV2StoredType extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

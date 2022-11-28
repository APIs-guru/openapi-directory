import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2StoredType
/** 
 * A reference to a StoredInfoType to use with scanning.
**/
export class GooglePrivacyDlpV2StoredType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

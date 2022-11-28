import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2FieldId
/** 
 * General identifier of a data field in a storage service.
**/
export class GooglePrivacyDlpV2FieldId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

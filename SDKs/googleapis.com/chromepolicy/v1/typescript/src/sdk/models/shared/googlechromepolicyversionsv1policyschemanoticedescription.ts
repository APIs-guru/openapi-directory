import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription
/** 
 * Provides special notice messages related to a particular value in a field that is part of a PolicySchema.
**/
export class GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgementRequired" })
  acknowledgementRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=noticeMessage" })
  noticeMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=noticeValue" })
  noticeValue?: string;
}

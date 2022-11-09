import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription
/** 
 * Provides special notice messages related to a particular value in a field that is part of a PolicySchema.
**/
export class GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgementRequired" })
  acknowledgementRequired?: boolean;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=noticeMessage" })
  noticeMessage?: string;

  @Metadata({ data: "json, name=noticeValue" })
  noticeValue?: string;
}

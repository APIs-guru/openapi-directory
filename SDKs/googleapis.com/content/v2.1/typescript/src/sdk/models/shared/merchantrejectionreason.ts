import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MerchantRejectionReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=reasonCode" })
  reasonCode?: string;
}

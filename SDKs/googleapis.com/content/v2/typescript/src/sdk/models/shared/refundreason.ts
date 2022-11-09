import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RefundReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=reasonCode" })
  reasonCode?: string;
}

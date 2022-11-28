import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RefundReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonCode" })
  reasonCode?: string;
}

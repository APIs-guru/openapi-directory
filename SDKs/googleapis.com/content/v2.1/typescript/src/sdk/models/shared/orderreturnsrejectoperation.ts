import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderreturnsRejectOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonText" })
  reasonText?: string;
}

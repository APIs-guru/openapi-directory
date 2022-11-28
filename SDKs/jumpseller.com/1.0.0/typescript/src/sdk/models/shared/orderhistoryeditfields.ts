import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderHistoryEditFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

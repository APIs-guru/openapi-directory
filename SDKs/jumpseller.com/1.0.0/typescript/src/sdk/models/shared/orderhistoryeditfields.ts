import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderHistoryEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}

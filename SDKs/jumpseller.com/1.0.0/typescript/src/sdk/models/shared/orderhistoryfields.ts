import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderHistoryFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

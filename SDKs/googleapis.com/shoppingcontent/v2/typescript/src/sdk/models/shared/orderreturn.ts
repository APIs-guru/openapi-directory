import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderReturn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonText" })
  reasonText?: string;
}

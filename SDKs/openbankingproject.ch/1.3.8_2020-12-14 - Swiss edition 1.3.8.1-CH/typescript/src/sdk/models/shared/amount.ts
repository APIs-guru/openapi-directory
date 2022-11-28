import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Amount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;
}

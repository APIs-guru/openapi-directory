import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Amount extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: string;

  @Metadata({ data: "json, name=currency" })
  currency: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregatorId" })
  aggregatorId?: string;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;
}

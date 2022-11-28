import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregatorId" })
  aggregatorId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;
}

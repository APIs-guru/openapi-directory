import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransferNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}

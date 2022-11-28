import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TopupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=trx;" })
  trx: string;
}

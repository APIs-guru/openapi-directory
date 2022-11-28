import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendTxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rawtx" })
  rawtx: string;
}

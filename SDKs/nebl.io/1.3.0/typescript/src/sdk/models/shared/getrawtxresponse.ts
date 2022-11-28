import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRawTxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rawtx" })
  rawtx?: string;
}

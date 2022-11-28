import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFaucetResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=txId" })
  txId?: string;
}


export class GetFaucetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetFaucetResponseData;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

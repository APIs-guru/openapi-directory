import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addrStr" })
  addrStr?: string;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=balanceSat" })
  balanceSat?: number;

  @SpeakeasyMetadata({ data: "json, name=totalReceived" })
  totalReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=totalReceivedSat" })
  totalReceivedSat?: number;

  @SpeakeasyMetadata({ data: "json, name=totalSent" })
  totalSent?: number;

  @SpeakeasyMetadata({ data: "json, name=totalSentSat" })
  totalSentSat?: number;

  @SpeakeasyMetadata({ data: "json, name=transactions" })
  transactions?: string[];

  @SpeakeasyMetadata({ data: "json, name=txAppearances" })
  txAppearances?: number;

  @SpeakeasyMetadata({ data: "json, name=unconfirmedBalance" })
  unconfirmedBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=unconfirmedBalanceSat" })
  unconfirmedBalanceSat?: number;

  @SpeakeasyMetadata({ data: "json, name=unconfirmedTxAppearances" })
  unconfirmedTxAppearances?: number;
}

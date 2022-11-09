import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAddressResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=addrStr" })
  addrStr?: string;

  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=balanceSat" })
  balanceSat?: number;

  @Metadata({ data: "json, name=totalReceived" })
  totalReceived?: number;

  @Metadata({ data: "json, name=totalReceivedSat" })
  totalReceivedSat?: number;

  @Metadata({ data: "json, name=totalSent" })
  totalSent?: number;

  @Metadata({ data: "json, name=totalSentSat" })
  totalSentSat?: number;

  @Metadata({ data: "json, name=transactions" })
  transactions?: string[];

  @Metadata({ data: "json, name=txAppearances" })
  txAppearances?: number;

  @Metadata({ data: "json, name=unconfirmedBalance" })
  unconfirmedBalance?: number;

  @Metadata({ data: "json, name=unconfirmedBalanceSat" })
  unconfirmedBalanceSat?: number;

  @Metadata({ data: "json, name=unconfirmedTxAppearances" })
  unconfirmedTxAppearances?: number;
}

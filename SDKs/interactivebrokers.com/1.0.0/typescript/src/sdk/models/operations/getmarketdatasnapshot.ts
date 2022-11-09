import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMarketdataSnapshotRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=conid" })
  conid?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=exchange" })
  exchange?: string;

  @Metadata({ data: "json, name=symbol" })
  symbol?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class GetMarketdataSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: operations.GetMarketdataSnapshotRequestBody })
  request: GetMarketdataSnapshotRequestBody[];
}


export class GetMarketdataSnapshot200ApplicationJsonBid extends SpeakeasyBase {
  @Metadata({ data: "json, name=market" })
  market?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;
}


export class GetMarketdataSnapshot200ApplicationJsonClosing extends SpeakeasyBase {
  @Metadata({ data: "json, name=price" })
  price?: number;
}


export class GetMarketdataSnapshot200ApplicationJsonOffer extends SpeakeasyBase {
  @Metadata({ data: "json, name=market" })
  market?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;
}


export class GetMarketdataSnapshot200ApplicationJsonTrade extends SpeakeasyBase {
  @Metadata({ data: "json, name=market" })
  market?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=time" })
  time?: number;
}


export class GetMarketdataSnapshot200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bid" })
  bid?: GetMarketdataSnapshot200ApplicationJsonBid;

  @Metadata({ data: "json, name=Closing" })
  closing?: GetMarketdataSnapshot200ApplicationJsonClosing;

  @Metadata({ data: "json, name=Complete" })
  complete?: boolean;

  @Metadata({ data: "json, name=Conid" })
  conid?: string;

  @Metadata({ data: "json, name=Offer" })
  offer?: GetMarketdataSnapshot200ApplicationJsonOffer;

  @Metadata({ data: "json, name=Temporality" })
  temporality?: number;

  @Metadata({ data: "json, name=Trade" })
  trade?: GetMarketdataSnapshot200ApplicationJsonTrade;
}


export class GetMarketdataSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: operations.GetMarketdataSnapshot200ApplicationJson })
  getMarketdataSnapshot200ApplicationJsonObjects?: GetMarketdataSnapshot200ApplicationJson[];

  @Metadata()
  statusCode: number;
}

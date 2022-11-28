import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMarketdataExchangeComponents200ApplicationJsonMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bit" })
  bit?: number;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=exchange" })
  exchange?: string;
}


export class GetMarketdataExchangeComponents200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Complete" })
  complete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConId" })
  conId?: number;

  @SpeakeasyMetadata({ data: "json, name=mapping", elemType: GetMarketdataExchangeComponents200ApplicationJsonMapping })
  mapping?: GetMarketdataExchangeComponents200ApplicationJsonMapping[];
}


export class GetMarketdataExchangeComponentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: GetMarketdataExchangeComponents200ApplicationJson })
  getMarketdataExchangeComponents200ApplicationJsonObjects?: GetMarketdataExchangeComponents200ApplicationJson[];

  @SpeakeasyMetadata()
  statusCode: number;
}

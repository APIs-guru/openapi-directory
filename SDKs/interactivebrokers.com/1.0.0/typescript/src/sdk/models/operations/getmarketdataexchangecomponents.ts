import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMarketdataExchangeComponents200ApplicationJsonMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=bit" })
  bit?: number;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=exchange" })
  exchange?: string;
}


export class GetMarketdataExchangeComponents200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Complete" })
  complete?: boolean;

  @Metadata({ data: "json, name=ConId" })
  conId?: number;

  @Metadata({ data: "json, name=mapping", elemType: operations.GetMarketdataExchangeComponents200ApplicationJsonMapping })
  mapping?: GetMarketdataExchangeComponents200ApplicationJsonMapping[];
}


export class GetMarketdataExchangeComponentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: operations.GetMarketdataExchangeComponents200ApplicationJson })
  getMarketdataExchangeComponents200ApplicationJsonObjects?: GetMarketdataExchangeComponents200ApplicationJson[];

  @Metadata()
  statusCode: number;
}

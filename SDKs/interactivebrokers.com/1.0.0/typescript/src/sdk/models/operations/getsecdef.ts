import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSecdefRequestBody extends SpeakeasyBase {
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


export class GetSecdefRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: GetSecdefRequestBody;
}


export class GetSecdef200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompanyName" })
  companyName?: string;

  @Metadata({ data: "json, name=ContractId" })
  contractId?: number;

  @Metadata({ data: "json, name=Currency" })
  currency?: string;

  @Metadata({ data: "json, name=Exchange" })
  exchange?: string;

  @Metadata({ data: "json, name=SecurityType" })
  securityType?: string;

  @Metadata({ data: "json, name=Ticker" })
  ticker?: string;
}


export class GetSecdefResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: operations.GetSecdef200ApplicationJson })
  getSecdef200ApplicationJsonObjects?: GetSecdef200ApplicationJson[];

  @Metadata()
  statusCode: number;
}

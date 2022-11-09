import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccountsAccountPositionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class GetAccountsAccountPositionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsAccountPositionsPathParams;
}


export class GetAccountsAccountPositions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=AverageCost" })
  averageCost?: number;

  @Metadata({ data: "json, name=ContractId" })
  contractId?: number;

  @Metadata({ data: "json, name=Position" })
  position?: number;
}


export class GetAccountsAccountPositionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: operations.GetAccountsAccountPositions200ApplicationJson })
  getAccountsAccountPositions200ApplicationJsonObjects?: GetAccountsAccountPositions200ApplicationJson[];

  @Metadata()
  statusCode: number;
}

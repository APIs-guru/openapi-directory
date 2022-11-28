import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountsAccountPositionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class GetAccountsAccountPositions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AverageCost" })
  averageCost?: number;

  @SpeakeasyMetadata({ data: "json, name=ContractId" })
  contractId?: number;

  @SpeakeasyMetadata({ data: "json, name=Position" })
  position?: number;
}


export class GetAccountsAccountPositionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountsAccountPositionsPathParams;
}


export class GetAccountsAccountPositionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: GetAccountsAccountPositions200ApplicationJson })
  getAccountsAccountPositions200ApplicationJsonObjects?: GetAccountsAccountPositions200ApplicationJson[];

  @SpeakeasyMetadata()
  statusCode: number;
}

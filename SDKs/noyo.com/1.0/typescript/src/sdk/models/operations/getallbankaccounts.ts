import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllBankAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class GetAllBankAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllBankAccountsPathParams;
}


export class GetAllBankAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankAccountPaginatedResult?: shared.BankAccountPaginatedResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBankAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bank_account_id" })
  bankAccountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class DeleteBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteBankAccountPathParams;
}


export class DeleteBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

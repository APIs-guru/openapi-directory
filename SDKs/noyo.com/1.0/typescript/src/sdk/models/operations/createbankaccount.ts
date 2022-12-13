import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBankAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" })
  applicationId: string;
}


export class CreateBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBankAccountPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BankAccountCreateRequest;
}


export class CreateBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankAccountResult?: shared.BankAccountResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

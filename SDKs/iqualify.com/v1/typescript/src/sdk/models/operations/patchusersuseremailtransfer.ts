import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchUsersUserEmailTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PatchUsersUserEmailTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchUsersUserEmailTransferPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TransferRequest;
}


export class PatchUsersUserEmailTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}

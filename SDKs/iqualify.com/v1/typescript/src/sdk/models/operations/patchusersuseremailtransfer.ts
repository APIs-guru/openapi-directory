import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchUsersUserEmailTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PatchUsersUserEmailTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchUsersUserEmailTransferPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TransferRequest;
}


export class PatchUsersUserEmailTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}

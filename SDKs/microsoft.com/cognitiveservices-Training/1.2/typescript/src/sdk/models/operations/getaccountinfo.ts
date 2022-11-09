import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetAccountInfoRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAccountInfoHeaders;
}


export class GetAccountInfoResponse extends SpeakeasyBase {
  @Metadata()
  account?: shared.Account;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

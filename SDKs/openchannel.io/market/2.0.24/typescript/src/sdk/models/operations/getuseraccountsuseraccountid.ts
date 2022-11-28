import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUserAccountsUserAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userAccountId" })
  userAccountId: string;
}


export class GetUserAccountsUserAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserAccountsUserAccountIdPathParams;
}


export class GetUserAccountsUserAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

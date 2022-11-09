import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUserAccountsUserAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userAccountId" })
  userAccountId: string;
}


export class GetUserAccountsUserAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserAccountsUserAccountIdPathParams;
}


export class GetUserAccountsUserAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

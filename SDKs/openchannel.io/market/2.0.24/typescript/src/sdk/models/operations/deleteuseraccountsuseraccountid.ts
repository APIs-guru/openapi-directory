import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserAccountsUserAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userAccountId" })
  userAccountId: string;
}


export class DeleteUserAccountsUserAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserAccountsUserAccountIdPathParams;
}


export class DeleteUserAccountsUserAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

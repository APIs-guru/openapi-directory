import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchUserAccountsUserAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userAccountId" })
  userAccountId: string;
}


export class PatchUserAccountsUserAccountIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PatchUserAccountsUserAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchUserAccountsUserAccountIdPathParams;

  @Metadata()
  queryParams: PatchUserAccountsUserAccountIdQueryParams;
}


export class PatchUserAccountsUserAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

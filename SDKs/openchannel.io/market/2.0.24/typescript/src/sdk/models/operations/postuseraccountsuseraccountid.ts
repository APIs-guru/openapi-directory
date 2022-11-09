import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostUserAccountsUserAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userAccountId" })
  userAccountId: string;
}


export class PostUserAccountsUserAccountIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PostUserAccountsUserAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUserAccountsUserAccountIdPathParams;

  @Metadata()
  queryParams: PostUserAccountsUserAccountIdQueryParams;
}


export class PostUserAccountsUserAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostUserAccountsUserAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userAccountId" })
  userAccountId: string;
}


export class PostUserAccountsUserAccountIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PostUserAccountsUserAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUserAccountsUserAccountIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostUserAccountsUserAccountIdQueryParams;
}


export class PostUserAccountsUserAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchUserAccountsUserAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userAccountId" })
  userAccountId: string;
}


export class PatchUserAccountsUserAccountIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PatchUserAccountsUserAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchUserAccountsUserAccountIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PatchUserAccountsUserAccountIdQueryParams;
}


export class PatchUserAccountsUserAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

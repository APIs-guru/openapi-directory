import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MirrorAccountsInsertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountName" })
  accountName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountType" })
  accountType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userToken" })
  userToken: string;
}


export class MirrorAccountsInsertQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class MirrorAccountsInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MirrorAccountsInsertPathParams;

  @SpeakeasyMetadata()
  queryParams: MirrorAccountsInsertQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Account;
}


export class MirrorAccountsInsertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MirrorAccountsInsertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountName" })
  accountName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountType" })
  accountType: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userToken" })
  userToken: string;
}


export class MirrorAccountsInsertQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class MirrorAccountsInsertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MirrorAccountsInsertPathParams;

  @Metadata()
  queryParams: MirrorAccountsInsertQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Account;
}


export class MirrorAccountsInsertResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

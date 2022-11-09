import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DriveRepliesInsertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class DriveRepliesInsertQueryParams extends SpeakeasyBase {
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


export class DriveRepliesInsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveRepliesInsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DriveRepliesInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DriveRepliesInsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DriveRepliesInsertSecurityOption2;
}


export class DriveRepliesInsertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DriveRepliesInsertPathParams;

  @Metadata()
  queryParams: DriveRepliesInsertQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CommentReply;

  @Metadata()
  security: DriveRepliesInsertSecurity;
}


export class DriveRepliesInsertResponse extends SpeakeasyBase {
  @Metadata()
  commentReply?: shared.CommentReply;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

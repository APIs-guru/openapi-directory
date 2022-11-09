import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudsearchMediaUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceName" })
  resourceName: string;
}


export class CloudsearchMediaUploadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudsearchMediaUploadSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchMediaUploadSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchMediaUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudsearchMediaUploadSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudsearchMediaUploadSecurityOption2;
}


export class CloudsearchMediaUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudsearchMediaUploadPathParams;

  @Metadata()
  queryParams: CloudsearchMediaUploadQueryParams;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;

  @Metadata()
  security: CloudsearchMediaUploadSecurity;
}


export class CloudsearchMediaUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  media?: shared.Media;

  @Metadata()
  statusCode: number;
}

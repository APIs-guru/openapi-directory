import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PubsubProjectsSchemasCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class PubsubProjectsSchemasCreateQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=schemaId" })
  schemaId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PubsubProjectsSchemasCreateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PubsubProjectsSchemasCreateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PubsubProjectsSchemasCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PubsubProjectsSchemasCreateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PubsubProjectsSchemasCreateSecurityOption2;
}


export class PubsubProjectsSchemasCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PubsubProjectsSchemasCreatePathParams;

  @Metadata()
  queryParams: PubsubProjectsSchemasCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Schema;

  @Metadata()
  security: PubsubProjectsSchemasCreateSecurity;
}


export class PubsubProjectsSchemasCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  schema?: shared.Schema;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudsearchIndexingDatasourcesGetSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudsearchIndexingDatasourcesGetSchemaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" })
  debugOptionsEnableDebugging?: boolean;

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


export class CloudsearchIndexingDatasourcesGetSchemaSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchIndexingDatasourcesGetSchemaSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchIndexingDatasourcesGetSchemaSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchIndexingDatasourcesGetSchemaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudsearchIndexingDatasourcesGetSchemaSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudsearchIndexingDatasourcesGetSchemaSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: CloudsearchIndexingDatasourcesGetSchemaSecurityOption3;
}


export class CloudsearchIndexingDatasourcesGetSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudsearchIndexingDatasourcesGetSchemaPathParams;

  @Metadata()
  queryParams: CloudsearchIndexingDatasourcesGetSchemaQueryParams;

  @Metadata()
  security: CloudsearchIndexingDatasourcesGetSchemaSecurity;
}


export class CloudsearchIndexingDatasourcesGetSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  schema?: shared.Schema;

  @Metadata()
  statusCode: number;
}

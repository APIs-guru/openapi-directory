import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" })
  spreadsheetId: string;
}


export class SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams extends SpeakeasyBase {
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


export class SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: SheetsSpreadsheetsValuesBatchClearByDataFilterSecurityOption3;
}


export class SheetsSpreadsheetsValuesBatchClearByDataFilterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SheetsSpreadsheetsValuesBatchClearByDataFilterPathParams;

  @Metadata()
  queryParams: SheetsSpreadsheetsValuesBatchClearByDataFilterQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchClearValuesByDataFilterRequest;

  @Metadata()
  security: SheetsSpreadsheetsValuesBatchClearByDataFilterSecurity;
}


export class SheetsSpreadsheetsValuesBatchClearByDataFilterResponse extends SpeakeasyBase {
  @Metadata()
  batchClearValuesByDataFilterResponse?: shared.BatchClearValuesByDataFilterResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

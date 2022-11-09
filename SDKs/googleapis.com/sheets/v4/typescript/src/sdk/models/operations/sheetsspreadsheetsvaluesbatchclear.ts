import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SheetsSpreadsheetsValuesBatchClearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spreadsheetId" })
  spreadsheetId: string;
}


export class SheetsSpreadsheetsValuesBatchClearQueryParams extends SpeakeasyBase {
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


export class SheetsSpreadsheetsValuesBatchClearSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchClearSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchClearSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SheetsSpreadsheetsValuesBatchClearSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SheetsSpreadsheetsValuesBatchClearSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SheetsSpreadsheetsValuesBatchClearSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: SheetsSpreadsheetsValuesBatchClearSecurityOption3;
}


export class SheetsSpreadsheetsValuesBatchClearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SheetsSpreadsheetsValuesBatchClearPathParams;

  @Metadata()
  queryParams: SheetsSpreadsheetsValuesBatchClearQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchClearValuesRequest;

  @Metadata()
  security: SheetsSpreadsheetsValuesBatchClearSecurity;
}


export class SheetsSpreadsheetsValuesBatchClearResponse extends SpeakeasyBase {
  @Metadata()
  batchClearValuesResponse?: shared.BatchClearValuesResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentShippingsettingsGetsupportedholidaysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=merchantId" })
  merchantId: string;
}


export class ContentShippingsettingsGetsupportedholidaysQueryParams extends SpeakeasyBase {
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


export class ContentShippingsettingsGetsupportedholidaysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ContentShippingsettingsGetsupportedholidaysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentShippingsettingsGetsupportedholidaysPathParams;

  @Metadata()
  queryParams: ContentShippingsettingsGetsupportedholidaysQueryParams;

  @Metadata()
  security: ContentShippingsettingsGetsupportedholidaysSecurity;
}


export class ContentShippingsettingsGetsupportedholidaysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  shippingsettingsGetSupportedHolidaysResponse?: shared.ShippingsettingsGetSupportedHolidaysResponse;

  @Metadata()
  statusCode: number;
}

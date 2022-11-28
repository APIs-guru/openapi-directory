import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SpannerProjectsInstancesDatabasesGetScansPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum SpannerProjectsInstancesDatabasesGetScansViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Summary = "SUMMARY",
    Full = "FULL"
}


export class SpannerProjectsInstancesDatabasesGetScansQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: SpannerProjectsInstancesDatabasesGetScansViewEnum;
}


export class SpannerProjectsInstancesDatabasesGetScansSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesDatabasesGetScansSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SpannerProjectsInstancesDatabasesGetScansSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: SpannerProjectsInstancesDatabasesGetScansSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: SpannerProjectsInstancesDatabasesGetScansSecurityOption2;
}


export class SpannerProjectsInstancesDatabasesGetScansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SpannerProjectsInstancesDatabasesGetScansPathParams;

  @SpeakeasyMetadata()
  queryParams: SpannerProjectsInstancesDatabasesGetScansQueryParams;

  @SpeakeasyMetadata()
  security: SpannerProjectsInstancesDatabasesGetScansSecurity;
}


export class SpannerProjectsInstancesDatabasesGetScansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scan?: shared.Scan;

  @SpeakeasyMetadata()
  statusCode: number;
}

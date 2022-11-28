import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DigitalassetlinksStatementsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relation" })
  relation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source.androidApp.certificate.sha256Fingerprint" })
  sourceAndroidAppCertificateSha256Fingerprint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source.androidApp.packageName" })
  sourceAndroidAppPackageName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source.web.site" })
  sourceWebSite?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DigitalassetlinksStatementsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DigitalassetlinksStatementsListQueryParams;
}


export class DigitalassetlinksStatementsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listResponse?: shared.ListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

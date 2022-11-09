import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DigitalassetlinksAssetlinksCheckQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=relation" })
  relation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source.androidApp.certificate.sha256Fingerprint" })
  sourceAndroidAppCertificateSha256Fingerprint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source.androidApp.packageName" })
  sourceAndroidAppPackageName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source.web.site" })
  sourceWebSite?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target.androidApp.certificate.sha256Fingerprint" })
  targetAndroidAppCertificateSha256Fingerprint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target.androidApp.packageName" })
  targetAndroidAppPackageName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target.web.site" })
  targetWebSite?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DigitalassetlinksAssetlinksCheckRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DigitalassetlinksAssetlinksCheckQueryParams;
}


export class DigitalassetlinksAssetlinksCheckResponse extends SpeakeasyBase {
  @Metadata()
  checkResponse?: shared.CheckResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

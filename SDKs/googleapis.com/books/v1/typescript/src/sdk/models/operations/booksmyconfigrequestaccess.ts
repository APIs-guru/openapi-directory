import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BooksMyconfigRequestAccessLicenseTypesEnum {
    LicenseTypesUndefined = "LICENSE_TYPES_UNDEFINED"
,    Both = "BOTH"
,    Concurrent = "CONCURRENT"
,    Download = "DOWNLOAD"
}


export class BooksMyconfigRequestAccessQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cpksver" })
  cpksver: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=licenseTypes" })
  licenseTypes?: BooksMyconfigRequestAccessLicenseTypesEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nonce" })
  nonce: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=volumeId" })
  volumeId: string;
}


export class BooksMyconfigRequestAccessSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BooksMyconfigRequestAccessRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BooksMyconfigRequestAccessQueryParams;

  @Metadata()
  security: BooksMyconfigRequestAccessSecurity;
}


export class BooksMyconfigRequestAccessResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  requestAccessData?: shared.RequestAccessData;

  @Metadata()
  statusCode: number;
}

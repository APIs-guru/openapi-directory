import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BooksMyconfigSyncVolumeLicensesFeaturesEnum {
    FeaturesUndefined = "FEATURES_UNDEFINED"
,    Rentals = "RENTALS"
}


export class BooksMyconfigSyncVolumeLicensesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=features" })
  features?: BooksMyconfigSyncVolumeLicensesFeaturesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeNonComicsSeries" })
  includeNonComicsSeries?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=showPreorders" })
  showPreorders?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=volumeIds" })
  volumeIds?: string[];
}


export class BooksMyconfigSyncVolumeLicensesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BooksMyconfigSyncVolumeLicensesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BooksMyconfigSyncVolumeLicensesQueryParams;

  @Metadata()
  security: BooksMyconfigSyncVolumeLicensesSecurity;
}


export class BooksMyconfigSyncVolumeLicensesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  volumes?: shared.Volumes;
}

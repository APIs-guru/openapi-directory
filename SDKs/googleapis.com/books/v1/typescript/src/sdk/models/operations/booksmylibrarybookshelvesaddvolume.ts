import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BooksMylibraryBookshelvesAddVolumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shelf" })
  shelf: string;
}

export enum BooksMylibraryBookshelvesAddVolumeReasonEnum {
    ReasonUndefined = "REASON_UNDEFINED"
,    IosPrex = "IOS_PREX"
,    IosSearch = "IOS_SEARCH"
,    Onboarding = "ONBOARDING"
}


export class BooksMylibraryBookshelvesAddVolumeQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: BooksMylibraryBookshelvesAddVolumeReasonEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=volumeId" })
  volumeId: string;
}


export class BooksMylibraryBookshelvesAddVolumeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BooksMylibraryBookshelvesAddVolumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BooksMylibraryBookshelvesAddVolumePathParams;

  @Metadata()
  queryParams: BooksMylibraryBookshelvesAddVolumeQueryParams;

  @Metadata()
  security: BooksMylibraryBookshelvesAddVolumeSecurity;
}


export class BooksMylibraryBookshelvesAddVolumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}

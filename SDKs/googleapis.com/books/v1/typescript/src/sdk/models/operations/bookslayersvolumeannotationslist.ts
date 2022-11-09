import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BooksLayersVolumeAnnotationsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=layerId" })
  layerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: string;
}


export class BooksLayersVolumeAnnotationsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contentVersion" })
  contentVersion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endOffset" })
  endOffset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endPosition" })
  endPosition?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=showDeleted" })
  showDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startOffset" })
  startOffset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startPosition" })
  startPosition?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedMax" })
  updatedMax?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedMin" })
  updatedMin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=volumeAnnotationsVersion" })
  volumeAnnotationsVersion?: string;
}


export class BooksLayersVolumeAnnotationsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BooksLayersVolumeAnnotationsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BooksLayersVolumeAnnotationsListPathParams;

  @Metadata()
  queryParams: BooksLayersVolumeAnnotationsListQueryParams;

  @Metadata()
  security: BooksLayersVolumeAnnotationsListSecurity;
}


export class BooksLayersVolumeAnnotationsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  volumeannotations?: shared.Volumeannotations;
}

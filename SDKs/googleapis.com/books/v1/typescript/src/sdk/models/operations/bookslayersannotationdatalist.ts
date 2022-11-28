import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BooksLayersAnnotationDataListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=layerId" })
  layerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: string;
}


export class BooksLayersAnnotationDataListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=annotationDataId" })
  annotationDataId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentVersion" })
  contentVersion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=h" })
  h?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scale" })
  scale?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedMax" })
  updatedMax?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedMin" })
  updatedMin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=w" })
  w?: number;
}


export class BooksLayersAnnotationDataListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BooksLayersAnnotationDataListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BooksLayersAnnotationDataListPathParams;

  @SpeakeasyMetadata()
  queryParams: BooksLayersAnnotationDataListQueryParams;

  @SpeakeasyMetadata()
  security: BooksLayersAnnotationDataListSecurity;
}


export class BooksLayersAnnotationDataListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  annotationsdata?: shared.Annotationsdata;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

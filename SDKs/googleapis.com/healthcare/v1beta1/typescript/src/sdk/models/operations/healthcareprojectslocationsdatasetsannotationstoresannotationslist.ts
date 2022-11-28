import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListViewEnum {
    AnnotationViewUnspecified = "ANNOTATION_VIEW_UNSPECIFIED",
    AnnotationViewBasic = "ANNOTATION_VIEW_BASIC",
    AnnotationViewFull = "ANNOTATION_VIEW_FULL"
}


export class HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListViewEnum;
}


export class HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListPathParams;

  @SpeakeasyMetadata()
  queryParams: HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams;

  @SpeakeasyMetadata()
  security: HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity;
}


export class HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAnnotationsResponse?: shared.ListAnnotationsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

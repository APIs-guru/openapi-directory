import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListViewEnum {
    AnnotationViewUnspecified = "ANNOTATION_VIEW_UNSPECIFIED"
,    AnnotationViewBasic = "ANNOTATION_VIEW_BASIC"
,    AnnotationViewFull = "ANNOTATION_VIEW_FULL"
}


export class HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListViewEnum;
}


export class HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListPathParams;

  @Metadata()
  queryParams: HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams;

  @Metadata()
  security: HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity;
}


export class HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAnnotationsResponse?: shared.ListAnnotationsResponse;

  @Metadata()
  statusCode: number;
}

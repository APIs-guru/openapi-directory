import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationCameraOnboardingStatusesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationCameraOnboardingStatusesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=networkIds" })
  networkIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=serials" })
  serials?: string[];
}


export class GetOrganizationCameraOnboardingStatusesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationCameraOnboardingStatusesPathParams;

  @Metadata()
  queryParams: GetOrganizationCameraOnboardingStatusesQueryParams;
}


export class GetOrganizationCameraOnboardingStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationCameraOnboardingStatuses200ApplicationJsonObject?: Map<string, any>;
}

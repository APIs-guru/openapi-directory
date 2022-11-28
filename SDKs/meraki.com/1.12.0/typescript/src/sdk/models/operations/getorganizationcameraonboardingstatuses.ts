import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationCameraOnboardingStatusesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationCameraOnboardingStatusesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=networkIds" })
  networkIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=serials" })
  serials?: string[];
}


export class GetOrganizationCameraOnboardingStatusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationCameraOnboardingStatusesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationCameraOnboardingStatusesQueryParams;
}


export class GetOrganizationCameraOnboardingStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationCameraOnboardingStatuses200ApplicationJsonObject?: Map<string, any>;
}

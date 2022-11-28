import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationCameraOnboardingStatusesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationCameraOnboardingStatusesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=wirelessCredentialsSent" })
  wirelessCredentialsSent?: boolean;
}


export class UpdateOrganizationCameraOnboardingStatusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationCameraOnboardingStatusesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationCameraOnboardingStatusesRequestBody;
}


export class UpdateOrganizationCameraOnboardingStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationCameraOnboardingStatuses200ApplicationJsonObject?: Map<string, any>;
}

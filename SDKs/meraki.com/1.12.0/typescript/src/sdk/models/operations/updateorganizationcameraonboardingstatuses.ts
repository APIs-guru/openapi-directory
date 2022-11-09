import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationCameraOnboardingStatusesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class UpdateOrganizationCameraOnboardingStatusesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=wirelessCredentialsSent" })
  wirelessCredentialsSent?: boolean;
}


export class UpdateOrganizationCameraOnboardingStatusesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationCameraOnboardingStatusesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationCameraOnboardingStatusesRequestBody;
}


export class UpdateOrganizationCameraOnboardingStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationCameraOnboardingStatuses200ApplicationJsonObject?: Map<string, any>;
}

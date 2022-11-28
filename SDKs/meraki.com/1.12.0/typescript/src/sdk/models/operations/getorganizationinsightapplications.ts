import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationInsightApplicationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationInsightApplicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationInsightApplicationsPathParams;
}


export class GetOrganizationInsightApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationInsightApplications200ApplicationJsonObject?: Map<string, any>;
}

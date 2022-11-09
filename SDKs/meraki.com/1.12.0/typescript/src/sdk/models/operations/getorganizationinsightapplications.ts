import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationInsightApplicationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationInsightApplicationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationInsightApplicationsPathParams;
}


export class GetOrganizationInsightApplicationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationInsightApplications200ApplicationJsonObject?: Map<string, any>;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationLicensesOverviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationLicensesOverviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationLicensesOverviewPathParams;
}


export class GetOrganizationLicensesOverviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationLicensesOverview200ApplicationJsonObject?: Map<string, any>;
}

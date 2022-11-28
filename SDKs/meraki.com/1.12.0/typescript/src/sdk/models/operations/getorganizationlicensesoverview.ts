import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationLicensesOverviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationLicensesOverviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationLicensesOverviewPathParams;
}


export class GetOrganizationLicensesOverviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationLicensesOverview200ApplicationJsonObject?: Map<string, any>;
}

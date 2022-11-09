import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationApiRequestsOverviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationApiRequestsOverviewQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetOrganizationApiRequestsOverviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationApiRequestsOverviewPathParams;

  @Metadata()
  queryParams: GetOrganizationApiRequestsOverviewQueryParams;
}


export class GetOrganizationApiRequestsOverviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationApiRequestsOverview200ApplicationJsonObject?: Map<string, any>;
}

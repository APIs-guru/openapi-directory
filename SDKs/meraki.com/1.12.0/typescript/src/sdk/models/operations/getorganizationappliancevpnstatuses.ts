import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationApplianceVpnStatusesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationApplianceVpnStatusesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=networkIds" })
  networkIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetOrganizationApplianceVpnStatusesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationApplianceVpnStatusesPathParams;

  @Metadata()
  queryParams: GetOrganizationApplianceVpnStatusesQueryParams;
}


export class GetOrganizationApplianceVpnStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationApplianceVpnStatuses200ApplicationJsonObject?: Map<string, any>;
}

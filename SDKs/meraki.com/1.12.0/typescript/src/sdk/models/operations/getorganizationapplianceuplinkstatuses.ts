import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationApplianceUplinkStatusesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationApplianceUplinkStatusesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=iccids" })
  iccids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=networkIds" })
  networkIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=serials" })
  serials?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetOrganizationApplianceUplinkStatusesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationApplianceUplinkStatusesPathParams;

  @Metadata()
  queryParams: GetOrganizationApplianceUplinkStatusesQueryParams;
}


export class GetOrganizationApplianceUplinkStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationApplianceUplinkStatuses200ApplicationJsonObject?: Map<string, any>;
}

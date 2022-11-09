import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationDevicesStatusesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationDevicesStatusesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=components" })
  components?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetOrganizationDevicesStatusesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationDevicesStatusesPathParams;

  @Metadata()
  queryParams: GetOrganizationDevicesStatusesQueryParams;
}


export class GetOrganizationDevicesStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationDevicesStatuses200ApplicationJsonObject?: Map<string, any>;
}

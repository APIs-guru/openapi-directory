import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationDevicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=configurationUpdatedAfter" })
  configurationUpdatedAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetOrganizationDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationDevicesPathParams;

  @Metadata()
  queryParams: GetOrganizationDevicesQueryParams;
}


export class GetOrganizationDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationDevices200ApplicationJsonObject?: Map<string, any>;
}

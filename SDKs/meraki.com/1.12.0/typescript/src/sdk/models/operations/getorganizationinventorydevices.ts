import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationInventoryDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum GetOrganizationInventoryDevicesUsedStateEnum {
    Used = "used"
,    Unused = "unused"
}


export class GetOrganizationInventoryDevicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=usedState" })
  usedState?: GetOrganizationInventoryDevicesUsedStateEnum;
}


export class GetOrganizationInventoryDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationInventoryDevicesPathParams;

  @Metadata()
  queryParams: GetOrganizationInventoryDevicesQueryParams;
}


export class GetOrganizationInventoryDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationInventoryDevices200ApplicationJsonObject?: Map<string, any>;
}

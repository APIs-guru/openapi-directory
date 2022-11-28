import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationInventoryDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum GetOrganizationInventoryDevicesUsedStateEnum {
    Used = "used",
    Unused = "unused"
}


export class GetOrganizationInventoryDevicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=usedState" })
  usedState?: GetOrganizationInventoryDevicesUsedStateEnum;
}


export class GetOrganizationInventoryDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationInventoryDevicesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationInventoryDevicesQueryParams;
}


export class GetOrganizationInventoryDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationInventoryDevices200ApplicationJsonObject?: Map<string, any>;
}

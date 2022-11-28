import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationApplianceUplinkStatusesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationApplianceUplinkStatusesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=iccids" })
  iccids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=networkIds" })
  networkIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=serials" })
  serials?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;
}


export class GetOrganizationApplianceUplinkStatusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationApplianceUplinkStatusesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationApplianceUplinkStatusesQueryParams;
}


export class GetOrganizationApplianceUplinkStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationApplianceUplinkStatuses200ApplicationJsonObject?: Map<string, any>;
}

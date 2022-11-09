import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationLicensesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum GetOrganizationLicensesStateEnum {
    Active = "active"
,    Expired = "expired"
,    Expiring = "expiring"
,    Unused = "unused"
,    UnusedActive = "unusedActive"
,    RecentlyQueued = "recentlyQueued"
}


export class GetOrganizationLicensesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" })
  deviceSerial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=networkId" })
  networkId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: GetOrganizationLicensesStateEnum;
}


export class GetOrganizationLicensesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationLicensesPathParams;

  @Metadata()
  queryParams: GetOrganizationLicensesQueryParams;
}


export class GetOrganizationLicensesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationLicenses200ApplicationJsonObject?: Map<string, any>;
}

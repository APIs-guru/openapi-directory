import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationConfigurationChangesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}


export class GetOrganizationConfigurationChangesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adminId" })
  adminId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=networkId" })
  networkId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" })
  startingAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetOrganizationConfigurationChangesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationConfigurationChangesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationConfigurationChangesQueryParams;
}


export class GetOrganizationConfigurationChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationConfigurationChanges200ApplicationJsonObject?: Map<string, any>;
}

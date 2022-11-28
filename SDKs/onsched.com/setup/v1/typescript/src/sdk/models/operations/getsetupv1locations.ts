import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1LocationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;
}


export class GetSetupV1LocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetupV1LocationsQueryParams;
}


export class GetSetupV1LocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}

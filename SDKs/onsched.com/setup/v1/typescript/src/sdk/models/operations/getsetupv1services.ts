import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1ServicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceGroupId" })
  serviceGroupId?: number;
}


export class GetSetupV1ServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetupV1ServicesQueryParams;
}


export class GetSetupV1ServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}

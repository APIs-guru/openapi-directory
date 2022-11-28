import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1LocationsIdServicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1LocationsIdServicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1LocationsIdServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1LocationsIdServicesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSetupV1LocationsIdServicesQueryParams;
}


export class GetSetupV1LocationsIdServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  businessServiceListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

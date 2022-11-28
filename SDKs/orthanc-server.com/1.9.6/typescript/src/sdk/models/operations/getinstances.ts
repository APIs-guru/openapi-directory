import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class GetInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetInstancesQueryParams;
}


export class GetInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getInstances200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

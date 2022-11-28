import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdMetadataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetInstancesIdMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdMetadataPathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdMetadataQueryParams;
}


export class GetInstancesIdMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getInstancesIdMetadata200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

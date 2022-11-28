import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdImageUint16PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdImageUint16QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdImageUint16Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdImageUint16Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdImageUint16PathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdImageUint16QueryParams;

  @SpeakeasyMetadata()
  headers: GetInstancesIdImageUint16Headers;
}


export class GetInstancesIdImageUint16Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

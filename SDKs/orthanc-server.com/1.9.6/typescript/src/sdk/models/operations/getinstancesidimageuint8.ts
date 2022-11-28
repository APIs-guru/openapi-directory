import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdImageUint8PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdImageUint8QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdImageUint8Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdImageUint8Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdImageUint8PathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdImageUint8QueryParams;

  @SpeakeasyMetadata()
  headers: GetInstancesIdImageUint8Headers;
}


export class GetInstancesIdImageUint8Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

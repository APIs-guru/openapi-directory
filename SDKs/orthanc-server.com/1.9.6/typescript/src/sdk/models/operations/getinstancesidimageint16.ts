import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdImageInt16PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdImageInt16QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdImageInt16Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdImageInt16Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdImageInt16PathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdImageInt16QueryParams;

  @SpeakeasyMetadata()
  headers: GetInstancesIdImageInt16Headers;
}


export class GetInstancesIdImageInt16Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdImageUint16PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdImageUint16QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdImageUint16Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdImageUint16Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdImageUint16PathParams;

  @Metadata()
  queryParams: GetInstancesIdImageUint16QueryParams;

  @Metadata()
  headers: GetInstancesIdImageUint16Headers;
}


export class GetInstancesIdImageUint16Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

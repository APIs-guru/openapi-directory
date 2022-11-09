import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdImageUint8PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdImageUint8QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdImageUint8Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdImageUint8Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdImageUint8PathParams;

  @Metadata()
  queryParams: GetInstancesIdImageUint8QueryParams;

  @Metadata()
  headers: GetInstancesIdImageUint8Headers;
}


export class GetInstancesIdImageUint8Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

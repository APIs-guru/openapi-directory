import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdImageInt16PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdImageInt16QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;
}


export class GetInstancesIdImageInt16Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdImageInt16Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdImageInt16PathParams;

  @Metadata()
  queryParams: GetInstancesIdImageInt16QueryParams;

  @Metadata()
  headers: GetInstancesIdImageInt16Headers;
}


export class GetInstancesIdImageInt16Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

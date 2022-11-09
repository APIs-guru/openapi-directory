import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFileHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept?: string;
}


export class GetInstancesIdFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdFilePathParams;

  @Metadata()
  headers: GetInstancesIdFileHeaders;
}


export class GetInstancesIdFileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdFile200ApplicationDicomPlusJsonAny?: any;

  @Metadata()
  statusCode: number;
}

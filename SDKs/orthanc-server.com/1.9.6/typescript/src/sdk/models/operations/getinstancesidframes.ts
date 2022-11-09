import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdFramesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdFramesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdFramesPathParams;
}


export class GetInstancesIdFramesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdFrames200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}

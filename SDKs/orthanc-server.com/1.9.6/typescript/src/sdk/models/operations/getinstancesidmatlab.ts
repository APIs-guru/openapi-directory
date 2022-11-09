import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdMatlabPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdMatlabRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdMatlabPathParams;
}


export class GetInstancesIdMatlabResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

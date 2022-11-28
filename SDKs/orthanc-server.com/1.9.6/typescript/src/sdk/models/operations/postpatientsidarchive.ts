import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPatientsIdArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostPatientsIdArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPatientsIdArchivePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostPatientsIdArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPatientsIdArchive200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

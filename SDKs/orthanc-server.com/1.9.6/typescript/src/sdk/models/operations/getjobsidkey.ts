import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobsIdKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class GetJobsIdKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJobsIdKeyPathParams;
}


export class GetJobsIdKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

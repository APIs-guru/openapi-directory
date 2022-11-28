import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutAnythingAnythingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=anything" })
  anything: string;
}


export class PutAnythingAnythingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAnythingAnythingPathParams;
}


export class PutAnythingAnythingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

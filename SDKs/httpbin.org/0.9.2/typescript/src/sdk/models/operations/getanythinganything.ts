import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnythingAnythingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=anything" })
  anything: string;
}


export class GetAnythingAnythingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnythingAnythingPathParams;
}


export class GetAnythingAnythingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

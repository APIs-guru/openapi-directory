import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutAnythingAnythingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=anything" })
  anything: string;
}


export class PutAnythingAnythingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAnythingAnythingPathParams;
}


export class PutAnythingAnythingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

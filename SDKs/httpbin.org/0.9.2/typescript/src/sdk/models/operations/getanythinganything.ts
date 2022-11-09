import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnythingAnythingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=anything" })
  anything: string;
}


export class GetAnythingAnythingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnythingAnythingPathParams;
}


export class GetAnythingAnythingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

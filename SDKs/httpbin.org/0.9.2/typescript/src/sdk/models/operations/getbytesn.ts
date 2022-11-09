import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBytesNPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetBytesNRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBytesNPathParams;
}


export class GetBytesNResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

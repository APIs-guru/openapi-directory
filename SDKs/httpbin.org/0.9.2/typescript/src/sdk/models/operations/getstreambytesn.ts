import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStreamBytesNPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetStreamBytesNRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStreamBytesNPathParams;
}


export class GetStreamBytesNResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

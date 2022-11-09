import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStreamNPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetStreamNRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStreamNPathParams;
}


export class GetStreamNResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

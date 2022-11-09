import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutDelayDelayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class PutDelayDelayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDelayDelayPathParams;
}


export class PutDelayDelayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

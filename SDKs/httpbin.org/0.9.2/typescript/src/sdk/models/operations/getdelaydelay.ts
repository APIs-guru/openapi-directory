import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDelayDelayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class GetDelayDelayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDelayDelayPathParams;
}


export class GetDelayDelayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

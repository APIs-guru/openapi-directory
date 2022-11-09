import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDelayDelayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class DeleteDelayDelayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDelayDelayPathParams;
}


export class DeleteDelayDelayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

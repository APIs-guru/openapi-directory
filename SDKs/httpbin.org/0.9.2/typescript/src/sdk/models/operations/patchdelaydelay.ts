import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchDelayDelayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class PatchDelayDelayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchDelayDelayPathParams;
}


export class PatchDelayDelayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

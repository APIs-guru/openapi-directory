import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTargetByEnsgidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=target" })
  target: string;
}


export class GetTargetByEnsgidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTargetByEnsgidPathParams;
}


export class GetTargetByEnsgidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

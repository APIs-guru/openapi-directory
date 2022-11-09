import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=disabled" })
  disabled: boolean;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: string;
}


export class DisableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisablePathParams;
}


export class DisableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AnonymizePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=anonymized" })
  anonymized: boolean;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: string;
}


export class AnonymizeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnonymizePathParams;
}


export class AnonymizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

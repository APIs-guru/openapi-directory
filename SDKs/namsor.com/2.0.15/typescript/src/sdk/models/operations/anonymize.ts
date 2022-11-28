import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnonymizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=anonymized" })
  anonymized: boolean;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: string;
}


export class AnonymizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AnonymizePathParams;
}


export class AnonymizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

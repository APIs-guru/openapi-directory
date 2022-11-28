import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBase64ValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class GetBase64ValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBase64ValuePathParams;
}


export class GetBase64ValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

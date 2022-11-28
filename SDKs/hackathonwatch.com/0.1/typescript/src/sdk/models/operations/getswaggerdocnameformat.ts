import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSwaggerDocNameFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSwaggerDocNameFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSwaggerDocNameFormatPathParams;
}


export class GetSwaggerDocNameFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

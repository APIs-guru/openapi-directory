import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSwaggerDocNameFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSwaggerDocNameFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSwaggerDocNameFormatPathParams;
}


export class GetSwaggerDocNameFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

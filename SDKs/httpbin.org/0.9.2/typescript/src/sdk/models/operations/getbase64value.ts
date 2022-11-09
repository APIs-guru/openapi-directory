import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBase64ValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class GetBase64ValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBase64ValuePathParams;
}


export class GetBase64ValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

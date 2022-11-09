import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBearerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization?: string;
}


export class GetBearerRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetBearerHeaders;
}


export class GetBearerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

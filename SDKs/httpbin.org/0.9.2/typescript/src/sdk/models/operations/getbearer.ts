import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBearerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization?: string;
}


export class GetBearerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetBearerHeaders;
}


export class GetBearerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEchoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

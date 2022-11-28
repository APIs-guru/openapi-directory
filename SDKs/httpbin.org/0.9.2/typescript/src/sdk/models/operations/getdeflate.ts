import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeflateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

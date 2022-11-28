import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEncodingUtf8Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHeadersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

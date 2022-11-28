import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMarketsThisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

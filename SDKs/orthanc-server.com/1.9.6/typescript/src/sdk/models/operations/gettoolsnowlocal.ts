import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetToolsNowLocalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

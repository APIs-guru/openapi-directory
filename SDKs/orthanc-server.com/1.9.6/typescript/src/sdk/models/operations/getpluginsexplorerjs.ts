import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPluginsExplorerJsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

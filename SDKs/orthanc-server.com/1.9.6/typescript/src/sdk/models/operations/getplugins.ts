import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPluginsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPlugins200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

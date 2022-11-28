import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetToolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTools200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

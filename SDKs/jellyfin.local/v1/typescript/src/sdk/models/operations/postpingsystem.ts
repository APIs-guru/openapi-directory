import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPingSystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPingSystem200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

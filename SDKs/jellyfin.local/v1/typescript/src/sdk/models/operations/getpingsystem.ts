import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPingSystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPingSystem200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

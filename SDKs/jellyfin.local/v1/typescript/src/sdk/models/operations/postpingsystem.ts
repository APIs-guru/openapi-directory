import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPingSystemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postPingSystem200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}

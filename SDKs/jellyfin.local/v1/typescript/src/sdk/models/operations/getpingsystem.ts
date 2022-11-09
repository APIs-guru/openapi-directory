import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPingSystemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPingSystem200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}

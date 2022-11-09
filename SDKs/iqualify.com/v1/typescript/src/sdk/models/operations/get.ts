import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  get200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}

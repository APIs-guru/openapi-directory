import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPluginsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPlugins200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}

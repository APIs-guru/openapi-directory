import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetToolsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTools200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSpecResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSpec200ApplicationJsonObject?: Map<string, any>;
}

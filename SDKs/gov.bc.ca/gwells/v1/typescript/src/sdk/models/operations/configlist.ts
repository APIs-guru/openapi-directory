import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasScriptsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

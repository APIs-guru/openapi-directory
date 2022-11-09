import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}

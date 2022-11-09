import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BillDocumentLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=media_type" })
  mediaType: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}

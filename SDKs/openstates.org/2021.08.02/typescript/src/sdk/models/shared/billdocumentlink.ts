import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BillDocumentLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=media_type" })
  mediaType: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BooksCloudloadingResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=processingState" })
  processingState?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeId" })
  volumeId?: string;
}

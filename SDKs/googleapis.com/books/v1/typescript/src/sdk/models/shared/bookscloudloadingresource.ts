import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BooksCloudloadingResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=processingState" })
  processingState?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=volumeId" })
  volumeId?: string;
}

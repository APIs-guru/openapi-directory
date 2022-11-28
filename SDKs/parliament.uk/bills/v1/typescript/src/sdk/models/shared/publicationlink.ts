import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PublicationLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

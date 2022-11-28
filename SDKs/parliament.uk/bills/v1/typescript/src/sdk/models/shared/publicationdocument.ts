import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PublicationDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentLength" })
  contentLength?: number;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mimetype" })
  mimetype?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

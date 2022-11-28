import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

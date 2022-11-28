import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivityAttemptOpenResponseFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=mimetype" })
  mimetype?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

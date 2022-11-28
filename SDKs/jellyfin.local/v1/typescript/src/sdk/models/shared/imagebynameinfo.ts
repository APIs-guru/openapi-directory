import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageByNameInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Context" })
  context?: string;

  @SpeakeasyMetadata({ data: "json, name=FileLength" })
  fileLength?: number;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Theme" })
  theme?: string;
}

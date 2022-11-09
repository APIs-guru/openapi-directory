import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageByNameInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Context" })
  context?: string;

  @Metadata({ data: "json, name=FileLength" })
  fileLength?: number;

  @Metadata({ data: "json, name=Format" })
  format?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Theme" })
  theme?: string;
}

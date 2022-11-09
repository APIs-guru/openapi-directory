import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActivityAttemptOpenResponseFiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=mimetype" })
  mimetype?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

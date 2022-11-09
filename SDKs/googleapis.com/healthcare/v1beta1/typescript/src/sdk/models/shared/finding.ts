import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Finding extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=infoType" })
  infoType?: string;

  @Metadata({ data: "json, name=quote" })
  quote?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;
}

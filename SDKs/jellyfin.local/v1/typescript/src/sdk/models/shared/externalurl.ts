import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExternalUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}

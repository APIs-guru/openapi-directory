import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Referrer extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=source" })
  source?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LinkService extends SpeakeasyBase {
  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}

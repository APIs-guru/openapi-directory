import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NextPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=after" })
  after: string;

  @Metadata({ data: "json, name=link" })
  link?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviousPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=before" })
  before: string;

  @Metadata({ data: "json, name=link" })
  link?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}

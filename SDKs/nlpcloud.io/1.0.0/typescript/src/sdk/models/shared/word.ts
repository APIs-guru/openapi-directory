import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Word extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag: string;

  @Metadata({ data: "json, name=text" })
  text: string;
}

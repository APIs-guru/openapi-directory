import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Done extends SpeakeasyBase {
  @Metadata({ data: "json, name=done" })
  done: boolean;
}

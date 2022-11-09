import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Reference extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

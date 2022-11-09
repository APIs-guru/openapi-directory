import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Substance extends SpeakeasyBase {
  @Metadata({ data: "json, name=substance" })
  substance?: Map<string, any>;
}

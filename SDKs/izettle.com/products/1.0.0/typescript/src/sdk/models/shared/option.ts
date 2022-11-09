import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Option extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}

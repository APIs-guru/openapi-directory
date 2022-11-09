import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta } from "./meta";


export class OpenAqResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=results" })
  results?: any[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";



export class OpenAqResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: any[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Option extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}

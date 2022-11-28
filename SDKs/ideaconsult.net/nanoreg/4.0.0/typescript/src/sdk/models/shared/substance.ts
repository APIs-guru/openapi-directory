import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Substance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=substance" })
  substance?: Map<string, any>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SpotSetUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;
}

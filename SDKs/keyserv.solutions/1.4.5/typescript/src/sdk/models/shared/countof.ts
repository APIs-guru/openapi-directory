import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CountOf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;
}

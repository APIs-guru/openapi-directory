import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CurrentKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: boolean;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Done extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=done" })
  done: boolean;
}

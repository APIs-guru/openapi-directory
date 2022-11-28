import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Word extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}

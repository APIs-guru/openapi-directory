import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FourHundredAndThreeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

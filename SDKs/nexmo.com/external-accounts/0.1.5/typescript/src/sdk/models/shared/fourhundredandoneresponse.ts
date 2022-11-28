import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FourHundredAndOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

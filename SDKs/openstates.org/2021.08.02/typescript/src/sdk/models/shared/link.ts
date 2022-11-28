import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Organisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExternalUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Referrer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Finding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=infoType" })
  infoType?: string;

  @SpeakeasyMetadata({ data: "json, name=quote" })
  quote?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}

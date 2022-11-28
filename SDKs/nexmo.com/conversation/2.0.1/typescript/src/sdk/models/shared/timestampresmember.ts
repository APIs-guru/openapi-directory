import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimestampResMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invited" })
  invited?: string;

  @SpeakeasyMetadata({ data: "json, name=joined" })
  joined?: string;

  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: string;
}

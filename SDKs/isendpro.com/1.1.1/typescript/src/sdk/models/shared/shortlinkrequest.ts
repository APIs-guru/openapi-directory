import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShortlinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyid" })
  keyid: string;

  @SpeakeasyMetadata({ data: "json, name=shortlink" })
  shortlink: string;
}

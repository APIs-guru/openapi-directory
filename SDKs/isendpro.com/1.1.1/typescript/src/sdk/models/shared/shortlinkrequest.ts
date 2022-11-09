import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ShortlinkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyid" })
  keyid: string;

  @Metadata({ data: "json, name=shortlink" })
  shortlink: string;
}

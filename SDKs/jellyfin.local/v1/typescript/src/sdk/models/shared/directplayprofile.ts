import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";


export class DirectPlayProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=AudioCodec" })
  audioCodec?: string;

  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=Type" })
  type?: DlnaProfileTypeEnum;

  @Metadata({ data: "json, name=VideoCodec" })
  videoCodec?: string;
}

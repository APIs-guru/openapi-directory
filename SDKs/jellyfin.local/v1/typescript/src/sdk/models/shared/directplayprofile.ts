import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";



export class DirectPlayProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AudioCodec" })
  audioCodec?: string;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: DlnaProfileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VideoCodec" })
  videoCodec?: string;
}

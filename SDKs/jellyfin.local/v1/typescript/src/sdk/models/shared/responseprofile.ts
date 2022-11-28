import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfileCondition } from "./profilecondition";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";



export class ResponseProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AudioCodec" })
  audioCodec?: string;

  @SpeakeasyMetadata({ data: "json, name=Conditions", elemType: ProfileCondition })
  conditions?: ProfileCondition[];

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=MimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=OrgPn" })
  orgPn?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: DlnaProfileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VideoCodec" })
  videoCodec?: string;
}

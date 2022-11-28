import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfileCondition } from "./profilecondition";
import { CodecTypeEnum } from "./codectypeenum";



export class CodecProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplyConditions", elemType: ProfileCondition })
  applyConditions?: ProfileCondition[];

  @SpeakeasyMetadata({ data: "json, name=Codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=Conditions", elemType: ProfileCondition })
  conditions?: ProfileCondition[];

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: CodecTypeEnum;
}

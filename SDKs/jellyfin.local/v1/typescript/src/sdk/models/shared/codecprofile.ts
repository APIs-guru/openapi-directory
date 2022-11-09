import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProfileCondition } from "./profilecondition";
import { ProfileCondition } from "./profilecondition";
import { CodecTypeEnum } from "./codectypeenum";


export class CodecProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplyConditions", elemType: shared.ProfileCondition })
  applyConditions?: ProfileCondition[];

  @Metadata({ data: "json, name=Codec" })
  codec?: string;

  @Metadata({ data: "json, name=Conditions", elemType: shared.ProfileCondition })
  conditions?: ProfileCondition[];

  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=Type" })
  type?: CodecTypeEnum;
}

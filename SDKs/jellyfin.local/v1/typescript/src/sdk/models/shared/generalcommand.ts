import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GeneralCommandTypeEnum } from "./generalcommandtypeenum";


export class GeneralCommand extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arguments" })
  arguments?: Map<string, string>;

  @Metadata({ data: "json, name=ControllingUserId" })
  controllingUserId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: GeneralCommandTypeEnum;
}

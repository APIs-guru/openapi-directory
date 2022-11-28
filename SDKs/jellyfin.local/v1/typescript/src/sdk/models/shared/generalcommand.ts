import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeneralCommandTypeEnum } from "./generalcommandtypeenum";



export class GeneralCommand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arguments" })
  arguments?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ControllingUserId" })
  controllingUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: GeneralCommandTypeEnum;
}

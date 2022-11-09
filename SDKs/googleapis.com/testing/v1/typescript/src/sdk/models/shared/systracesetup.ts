import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SystraceSetup extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationSeconds" })
  durationSeconds?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateFailureState extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=failedConfiguration" })
  failedConfiguration?: Map<string, any>;

  @Metadata({ data: "json, name=lastUpdateAttempt" })
  lastUpdateAttempt?: string;
}

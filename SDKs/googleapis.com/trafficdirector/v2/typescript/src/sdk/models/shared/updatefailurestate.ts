import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateFailureState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=failedConfiguration" })
  failedConfiguration?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateAttempt" })
  lastUpdateAttempt?: string;
}

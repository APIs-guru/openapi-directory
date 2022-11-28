import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Diagnostic } from "./diagnostic";



export class PollingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diagnostics", elemType: Diagnostic })
  diagnostics?: Diagnostic[];

  @SpeakeasyMetadata({ data: "json, name=failCondition" })
  failCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=finishCondition" })
  finishCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=pollingLink" })
  pollingLink?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLink" })
  targetLink?: string;
}

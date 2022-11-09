import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Diagnostic } from "./diagnostic";


export class PollingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=diagnostics", elemType: shared.Diagnostic })
  diagnostics?: Diagnostic[];

  @Metadata({ data: "json, name=failCondition" })
  failCondition?: string;

  @Metadata({ data: "json, name=finishCondition" })
  finishCondition?: string;

  @Metadata({ data: "json, name=pollingLink" })
  pollingLink?: string;

  @Metadata({ data: "json, name=targetLink" })
  targetLink?: string;
}

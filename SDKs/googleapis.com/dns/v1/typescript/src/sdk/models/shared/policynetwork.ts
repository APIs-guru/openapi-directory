import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PolicyNetwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=networkUrl" })
  networkUrl?: string;
}

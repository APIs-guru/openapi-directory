import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReturnPolicyPolicy } from "./returnpolicypolicy";


export class ReturnPolicySeasonalOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: ReturnPolicyPolicy;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}

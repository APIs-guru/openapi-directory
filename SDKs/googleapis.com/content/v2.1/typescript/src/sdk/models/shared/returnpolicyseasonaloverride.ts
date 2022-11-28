import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyPolicy } from "./returnpolicypolicy";



export class ReturnPolicySeasonalOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: ReturnPolicyPolicy;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}

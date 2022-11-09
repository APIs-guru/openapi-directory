import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LoyaltyPoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pointsValue" })
  pointsValue?: string;

  @Metadata({ data: "json, name=ratio" })
  ratio?: number;
}

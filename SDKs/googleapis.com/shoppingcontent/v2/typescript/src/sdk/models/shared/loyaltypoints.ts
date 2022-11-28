import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LoyaltyPoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pointsValue" })
  pointsValue?: string;

  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio?: number;
}

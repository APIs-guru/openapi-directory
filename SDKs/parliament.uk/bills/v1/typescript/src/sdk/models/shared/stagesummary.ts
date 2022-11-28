import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HouseEnum } from "./houseenum";
import { BillStageSitting } from "./billstagesitting";



export class StageSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: HouseEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: number;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=stageId" })
  stageId?: number;

  @SpeakeasyMetadata({ data: "json, name=stageSittings", elemType: BillStageSitting })
  stageSittings?: BillStageSitting[];
}

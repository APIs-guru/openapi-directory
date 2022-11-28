import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Committee } from "./committee";
import { HouseEnum } from "./houseenum";
import { BillStageSitting } from "./billstagesitting";



export class BillStageDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=committee" })
  committee?: Committee;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: HouseEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=nextStageBillStageId" })
  nextStageBillStageId?: number;

  @SpeakeasyMetadata({ data: "json, name=previousStageBillStageId" })
  previousStageBillStageId?: number;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: number;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=stageId" })
  stageId?: number;

  @SpeakeasyMetadata({ data: "json, name=stageSittings", elemType: BillStageSitting })
  stageSittings?: BillStageSitting[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BillStageSitting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billId" })
  billId?: number;

  @SpeakeasyMetadata({ data: "json, name=billStageId" })
  billStageId?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=stageId" })
  stageId?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BillStageSitting extends SpeakeasyBase {
  @Metadata({ data: "json, name=billId" })
  billId?: number;

  @Metadata({ data: "json, name=billStageId" })
  billStageId?: number;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=stageId" })
  stageId?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HouseEnum } from "./houseenum";
import { BillStageSitting } from "./billstagesitting";


export class StageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=house" })
  house?: HouseEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: number;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=stageId" })
  stageId?: number;

  @Metadata({ data: "json, name=stageSittings", elemType: shared.BillStageSitting })
  stageSittings?: BillStageSitting[];
}

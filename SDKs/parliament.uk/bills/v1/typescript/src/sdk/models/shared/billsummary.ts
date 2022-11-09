import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HouseEnum } from "./houseenum";
import { StageSummary } from "./stagesummary";
import { HouseEnum } from "./houseenum";


export class BillSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=billId" })
  billId?: number;

  @Metadata({ data: "json, name=billTypeId" })
  billTypeId?: number;

  @Metadata({ data: "json, name=billWithdrawn" })
  billWithdrawn?: Date;

  @Metadata({ data: "json, name=currentHouse" })
  currentHouse?: HouseEnum;

  @Metadata({ data: "json, name=currentStage" })
  currentStage?: StageSummary;

  @Metadata({ data: "json, name=includedSessionIds" })
  includedSessionIds?: number[];

  @Metadata({ data: "json, name=introducedSessionId" })
  introducedSessionId?: number;

  @Metadata({ data: "json, name=isAct" })
  isAct?: boolean;

  @Metadata({ data: "json, name=isDefeated" })
  isDefeated?: boolean;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=originatingHouse" })
  originatingHouse?: HouseEnum;

  @Metadata({ data: "json, name=shortTitle" })
  shortTitle?: string;
}

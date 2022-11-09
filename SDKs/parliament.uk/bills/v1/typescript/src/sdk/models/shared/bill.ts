import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillAgent } from "./billagent";
import { HouseEnum } from "./houseenum";
import { StageSummary } from "./stagesummary";
import { HouseEnum } from "./houseenum";
import { Promoter } from "./promoter";
import { Sponsor } from "./sponsor";


export class Bill extends SpeakeasyBase {
  @Metadata({ data: "json, name=agent" })
  agent?: BillAgent;

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

  @Metadata({ data: "json, name=longTitle" })
  longTitle?: string;

  @Metadata({ data: "json, name=originatingHouse" })
  originatingHouse?: HouseEnum;

  @Metadata({ data: "json, name=petitionInformation" })
  petitionInformation?: string;

  @Metadata({ data: "json, name=petitioningPeriod" })
  petitioningPeriod?: string;

  @Metadata({ data: "json, name=promoters", elemType: shared.Promoter })
  promoters?: Promoter[];

  @Metadata({ data: "json, name=shortTitle" })
  shortTitle?: string;

  @Metadata({ data: "json, name=sponsors", elemType: shared.Sponsor })
  sponsors?: Sponsor[];

  @Metadata({ data: "json, name=summary" })
  summary?: string;
}

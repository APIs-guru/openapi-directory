import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillAgent } from "./billagent";
import { HouseEnum } from "./houseenum";
import { StageSummary } from "./stagesummary";
import { Promoter } from "./promoter";
import { Sponsor } from "./sponsor";



export class Bill extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent" })
  agent?: BillAgent;

  @SpeakeasyMetadata({ data: "json, name=billId" })
  billId?: number;

  @SpeakeasyMetadata({ data: "json, name=billTypeId" })
  billTypeId?: number;

  @SpeakeasyMetadata({ data: "json, name=billWithdrawn" })
  billWithdrawn?: Date;

  @SpeakeasyMetadata({ data: "json, name=currentHouse" })
  currentHouse?: HouseEnum;

  @SpeakeasyMetadata({ data: "json, name=currentStage" })
  currentStage?: StageSummary;

  @SpeakeasyMetadata({ data: "json, name=includedSessionIds" })
  includedSessionIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=introducedSessionId" })
  introducedSessionId?: number;

  @SpeakeasyMetadata({ data: "json, name=isAct" })
  isAct?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDefeated" })
  isDefeated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=longTitle" })
  longTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=originatingHouse" })
  originatingHouse?: HouseEnum;

  @SpeakeasyMetadata({ data: "json, name=petitionInformation" })
  petitionInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=petitioningPeriod" })
  petitioningPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=promoters", elemType: Promoter })
  promoters?: Promoter[];

  @SpeakeasyMetadata({ data: "json, name=shortTitle" })
  shortTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=sponsors", elemType: Sponsor })
  sponsors?: Sponsor[];

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;
}

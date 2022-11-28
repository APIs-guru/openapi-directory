import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Publication } from "./publication";
import { BillStageSittingPublicationList } from "./billstagesittingpublicationlist";



export class BillStagePublicationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billStageId" })
  billStageId?: number;

  @SpeakeasyMetadata({ data: "json, name=publications", elemType: Publication })
  publications?: Publication[];

  @SpeakeasyMetadata({ data: "json, name=sittings", elemType: BillStageSittingPublicationList })
  sittings?: BillStageSittingPublicationList[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Publication } from "./publication";
import { BillStageSittingPublicationList } from "./billstagesittingpublicationlist";


export class BillStagePublicationList extends SpeakeasyBase {
  @Metadata({ data: "json, name=billStageId" })
  billStageId?: number;

  @Metadata({ data: "json, name=publications", elemType: shared.Publication })
  publications?: Publication[];

  @Metadata({ data: "json, name=sittings", elemType: shared.BillStageSittingPublicationList })
  sittings?: BillStageSittingPublicationList[];
}

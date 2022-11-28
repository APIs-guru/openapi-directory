import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Publication } from "./publication";



export class BillStageSittingPublicationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publications", elemType: Publication })
  publications?: Publication[];

  @SpeakeasyMetadata({ data: "json, name=sittingId" })
  sittingId?: number;
}

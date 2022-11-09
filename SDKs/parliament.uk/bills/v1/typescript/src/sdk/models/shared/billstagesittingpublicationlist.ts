import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Publication } from "./publication";


export class BillStageSittingPublicationList extends SpeakeasyBase {
  @Metadata({ data: "json, name=publications", elemType: shared.Publication })
  publications?: Publication[];

  @Metadata({ data: "json, name=sittingId" })
  sittingId?: number;
}

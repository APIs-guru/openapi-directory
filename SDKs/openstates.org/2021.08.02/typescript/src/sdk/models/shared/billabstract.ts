import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BillAbstract extends SpeakeasyBase {
  @Metadata({ data: "json, name=abstract" })
  abstract: string;

  @Metadata({ data: "json, name=note" })
  note: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BillTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}

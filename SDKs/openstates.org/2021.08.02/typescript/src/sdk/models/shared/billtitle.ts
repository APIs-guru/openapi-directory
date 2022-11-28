import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BillTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BillAbstract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abstract" })
  abstract: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note: string;
}

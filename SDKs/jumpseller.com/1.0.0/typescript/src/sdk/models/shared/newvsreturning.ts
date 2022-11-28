import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewVsReturning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=new" })
  new?: number;

  @SpeakeasyMetadata({ data: "json, name=returning" })
  returning?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SpotSetCreateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=setid" })
  setid?: number;
}

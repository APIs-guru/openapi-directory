import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VoteCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=option" })
  option: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

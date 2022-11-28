import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LabelColor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=textColor" })
  textColor?: string;
}

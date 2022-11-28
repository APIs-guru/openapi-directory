import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DigitalProductEditFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

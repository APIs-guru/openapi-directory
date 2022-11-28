import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry: Date;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters: string;
}

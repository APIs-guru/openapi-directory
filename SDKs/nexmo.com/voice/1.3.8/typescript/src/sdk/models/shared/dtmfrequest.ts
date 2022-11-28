import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DtmfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digits" })
  digits?: string;
}

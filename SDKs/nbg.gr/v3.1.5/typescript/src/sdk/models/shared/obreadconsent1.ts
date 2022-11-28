import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObReadData1 } from "./obreaddata1";



export class ObReadConsent1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadData1;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: Map<string, any>;
}

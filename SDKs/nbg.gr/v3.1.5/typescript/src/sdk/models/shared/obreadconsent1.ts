import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObReadData1 } from "./obreaddata1";


export class ObReadConsent1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadData1;

  @Metadata({ data: "json, name=Risk" })
  risk: Map<string, any>;
}

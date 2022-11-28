import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObAccount6 } from "./obaccount6";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadAccount6Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account", elemType: ObAccount6 })
  account?: ObAccount6[];
}


export class ObReadAccount6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadAccount6Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}

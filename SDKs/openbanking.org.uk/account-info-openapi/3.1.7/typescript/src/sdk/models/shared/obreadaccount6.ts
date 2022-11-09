import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObAccount6 } from "./obaccount6";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadAccount6Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Account", elemType: shared.ObAccount6 })
  account?: ObAccount6[];
}


export class ObReadAccount6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadAccount6Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InterfaceNestedCircuit extends SpeakeasyBase {
  @Metadata({ data: "json, name=cid" })
  cid: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

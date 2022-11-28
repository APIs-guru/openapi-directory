import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NestedCircuit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cid" })
  cid: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

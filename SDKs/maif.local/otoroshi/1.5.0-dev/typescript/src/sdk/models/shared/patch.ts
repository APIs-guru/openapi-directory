import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PatchOpEnum {
    Add = "add",
    Replace = "replace",
    Remove = "remove",
    Copy = "copy",
    Test = "test"
}


export class Patch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=op" })
  op: PatchOpEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}

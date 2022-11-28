import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GhErrorHints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GhError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hints", elemType: GhErrorHints })
  hints?: GhErrorHints[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

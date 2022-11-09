import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GhErrorHints extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GhError extends SpeakeasyBase {
  @Metadata({ data: "json, name=hints", elemType: shared.GhErrorHints })
  hints?: GhErrorHints[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}

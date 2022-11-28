import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PathFilter } from "./pathfilter";



export class CloneVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclude" })
  exclude?: PathFilter;

  @SpeakeasyMetadata({ data: "json, name=finalize" })
  finalize?: boolean;

  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: PathFilter;

  @SpeakeasyMetadata({ data: "json, name=sourceVersion" })
  sourceVersion?: string;
}

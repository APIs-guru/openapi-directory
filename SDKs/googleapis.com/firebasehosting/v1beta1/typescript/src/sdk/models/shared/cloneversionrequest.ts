import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PathFilter } from "./pathfilter";
import { PathFilter } from "./pathfilter";


export class CloneVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclude" })
  exclude?: PathFilter;

  @Metadata({ data: "json, name=finalize" })
  finalize?: boolean;

  @Metadata({ data: "json, name=include" })
  include?: PathFilter;

  @Metadata({ data: "json, name=sourceVersion" })
  sourceVersion?: string;
}

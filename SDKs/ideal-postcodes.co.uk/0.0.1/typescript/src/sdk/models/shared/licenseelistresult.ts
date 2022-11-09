import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Licensee } from "./licensee";


export class LicenseeListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasMore" })
  hasMore?: boolean;

  @Metadata({ data: "json, name=licensees", elemType: shared.Licensee })
  licensees?: Licensee[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Licensee } from "./licensee";



export class LicenseeListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasMore" })
  hasMore?: boolean;

  @SpeakeasyMetadata({ data: "json, name=licensees", elemType: Licensee })
  licensees?: Licensee[];
}

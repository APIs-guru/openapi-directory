import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PopulateVersionFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uploadRequiredHashes" })
  uploadRequiredHashes?: string[];

  @SpeakeasyMetadata({ data: "json, name=uploadUrl" })
  uploadUrl?: string;
}

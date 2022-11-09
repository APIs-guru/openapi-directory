import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PopulateVersionFilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=uploadRequiredHashes" })
  uploadRequiredHashes?: string[];

  @Metadata({ data: "json, name=uploadUrl" })
  uploadUrl?: string;
}

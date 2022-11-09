import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VersionFile } from "./versionfile";


export class ListVersionFilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.VersionFile })
  files?: VersionFile[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

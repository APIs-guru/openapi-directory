import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VersionFile } from "./versionfile";



export class ListVersionFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: VersionFile })
  files?: VersionFile[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

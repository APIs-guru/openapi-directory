import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDrivesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDrivesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetDrivesSecurity;
}


export class GetDrivesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.FileSystemEntryInfo })
  fileSystemEntryInfos?: shared.FileSystemEntryInfo[];

  @Metadata()
  statusCode: number;
}

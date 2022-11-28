import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDrivesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDrivesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetDrivesSecurity;
}


export class GetDrivesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.FileSystemEntryInfo })
  fileSystemEntryInfos?: shared.FileSystemEntryInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}

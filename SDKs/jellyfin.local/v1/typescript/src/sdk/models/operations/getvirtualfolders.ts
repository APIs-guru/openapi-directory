import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVirtualFoldersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetVirtualFoldersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetVirtualFoldersSecurity;
}


export class GetVirtualFoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.VirtualFolderInfo })
  virtualFolderInfos?: shared.VirtualFolderInfo[];
}

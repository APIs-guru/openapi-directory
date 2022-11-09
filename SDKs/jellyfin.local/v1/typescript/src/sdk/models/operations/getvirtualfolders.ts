import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVirtualFoldersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetVirtualFoldersRequest extends SpeakeasyBase {
  @Metadata()
  security: GetVirtualFoldersSecurity;
}


export class GetVirtualFoldersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.VirtualFolderInfo })
  virtualFolderInfos?: shared.VirtualFolderInfo[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RenameVirtualFolderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newName" })
  newName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshLibrary" })
  refreshLibrary?: boolean;
}


export class RenameVirtualFolderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class RenameVirtualFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RenameVirtualFolderQueryParams;

  @SpeakeasyMetadata()
  security: RenameVirtualFolderSecurity;
}


export class RenameVirtualFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}

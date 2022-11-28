import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveVirtualFolderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshLibrary" })
  refreshLibrary?: boolean;
}


export class RemoveVirtualFolderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class RemoveVirtualFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RemoveVirtualFolderQueryParams;

  @SpeakeasyMetadata()
  security: RemoveVirtualFolderSecurity;
}


export class RemoveVirtualFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

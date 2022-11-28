import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddVirtualFolderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collectionType" })
  collectionType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paths" })
  paths?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshLibrary" })
  refreshLibrary?: boolean;
}


export class AddVirtualFolderRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  addVirtualFolderDto?: shared.AddVirtualFolderDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  addVirtualFolderDto1?: shared.AddVirtualFolderDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  addVirtualFolderDto2?: shared.AddVirtualFolderDto;
}


export class AddVirtualFolderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AddVirtualFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AddVirtualFolderQueryParams;

  @SpeakeasyMetadata()
  request?: AddVirtualFolderRequests;

  @SpeakeasyMetadata()
  security: AddVirtualFolderSecurity;
}


export class AddVirtualFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVirtualFolderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=collectionType" })
  collectionType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=paths" })
  paths?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=refreshLibrary" })
  refreshLibrary?: boolean;
}


export class AddVirtualFolderRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  addVirtualFolderDto?: shared.AddVirtualFolderDto;

  @Metadata({ data: "request, media_type=application/json" })
  addVirtualFolderDto1?: shared.AddVirtualFolderDto;

  @Metadata({ data: "request, media_type=text/json" })
  addVirtualFolderDto2?: shared.AddVirtualFolderDto;
}


export class AddVirtualFolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AddVirtualFolderRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AddVirtualFolderQueryParams;

  @Metadata()
  request?: AddVirtualFolderRequests;

  @Metadata()
  security: AddVirtualFolderSecurity;
}


export class AddVirtualFolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

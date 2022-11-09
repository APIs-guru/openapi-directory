import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDirectoryContentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDirectories" })
  includeDirectories?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeFiles" })
  includeFiles?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;
}


export class GetDirectoryContentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDirectoryContentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDirectoryContentsQueryParams;

  @Metadata()
  security: GetDirectoryContentsSecurity;
}


export class GetDirectoryContentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.FileSystemEntryInfo })
  fileSystemEntryInfos?: shared.FileSystemEntryInfo[];

  @Metadata()
  statusCode: number;
}

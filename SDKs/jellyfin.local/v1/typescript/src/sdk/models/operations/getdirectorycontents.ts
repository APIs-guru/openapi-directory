import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDirectoryContentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDirectories" })
  includeDirectories?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeFiles" })
  includeFiles?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;
}


export class GetDirectoryContentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDirectoryContentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDirectoryContentsQueryParams;

  @SpeakeasyMetadata()
  security: GetDirectoryContentsSecurity;
}


export class GetDirectoryContentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.FileSystemEntryInfo })
  fileSystemEntryInfos?: shared.FileSystemEntryInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMediaFoldersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isHidden" })
  isHidden?: boolean;
}


export class GetMediaFoldersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMediaFoldersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMediaFoldersQueryParams;

  @SpeakeasyMetadata()
  security: GetMediaFoldersSecurity;
}


export class GetMediaFoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

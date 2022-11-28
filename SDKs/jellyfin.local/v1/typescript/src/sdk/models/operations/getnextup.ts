import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNextUpQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImges" })
  enableImges?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" })
  enableTotalRecordCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seriesId" })
  seriesId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetNextUpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetNextUpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNextUpQueryParams;

  @SpeakeasyMetadata()
  security: GetNextUpSecurity;
}


export class GetNextUpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

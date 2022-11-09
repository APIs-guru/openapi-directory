import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInstantMixFromAlbumPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstantMixFromAlbumQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImages" })
  enableImages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetInstantMixFromAlbumSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetInstantMixFromAlbumRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstantMixFromAlbumPathParams;

  @Metadata()
  queryParams: GetInstantMixFromAlbumQueryParams;

  @Metadata()
  security: GetInstantMixFromAlbumSecurity;
}


export class GetInstantMixFromAlbumResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

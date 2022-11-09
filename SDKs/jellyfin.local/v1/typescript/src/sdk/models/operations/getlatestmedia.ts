import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLatestMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetLatestMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImages" })
  enableImages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupItems" })
  groupItems?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeItemTypes" })
  includeItemTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=isPlayed" })
  isPlayed?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;
}


export class GetLatestMediaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLatestMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLatestMediaPathParams;

  @Metadata()
  queryParams: GetLatestMediaQueryParams;

  @Metadata()
  security: GetLatestMediaSecurity;
}


export class GetLatestMediaResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BaseItemDto })
  baseItemDtos?: shared.BaseItemDto[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

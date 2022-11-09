import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BooksMylibraryReadingpositionsSetPositionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: string;
}

export enum BooksMylibraryReadingpositionsSetPositionActionEnum {
    ActionUndefined = "ACTION_UNDEFINED"
,    Bookmark = "bookmark"
,    Chapter = "chapter"
,    NextPage = "next-page"
,    PrevPage = "prev-page"
,    Scroll = "scroll"
,    Search = "search"
}


export class BooksMylibraryReadingpositionsSetPositionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: BooksMylibraryReadingpositionsSetPositionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contentVersion" })
  contentVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceCookie" })
  deviceCookie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position" })
  position: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BooksMylibraryReadingpositionsSetPositionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BooksMylibraryReadingpositionsSetPositionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BooksMylibraryReadingpositionsSetPositionPathParams;

  @Metadata()
  queryParams: BooksMylibraryReadingpositionsSetPositionQueryParams;

  @Metadata()
  security: BooksMylibraryReadingpositionsSetPositionSecurity;
}


export class BooksMylibraryReadingpositionsSetPositionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}

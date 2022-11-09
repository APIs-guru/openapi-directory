import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMonatsbelegePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetMonatsbelegeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=month" })
  month?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetMonatsbelegeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMonatsbelegePathParams;

  @Metadata()
  queryParams: GetMonatsbelegeQueryParams;
}


export class GetMonatsbelegeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Monatsbeleg })
  monatsbelegs?: shared.Monatsbeleg[];

  @Metadata()
  statusCode: number;
}

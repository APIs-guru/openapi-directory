import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LandlordControllerGetDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetDocumentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ID" })
  id: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetDocumentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LandlordControllerGetDocumentPathParams;

  @Metadata()
  queryParams: LandlordControllerGetDocumentQueryParams;
}


export class LandlordControllerGetDocumentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}

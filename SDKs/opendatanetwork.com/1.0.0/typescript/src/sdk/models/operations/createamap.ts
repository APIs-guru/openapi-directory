import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAMapQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraint" })
  constraint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variable" })
  variable: string;
}


export class CreateAMapHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class CreateAMapRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateAMapQueryParams;

  @SpeakeasyMetadata()
  headers: CreateAMapHeaders;
}


export class CreateAMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

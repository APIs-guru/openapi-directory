import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchDevelopersDeveloperIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;
}


export class PatchDevelopersDeveloperIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class PatchDevelopersDeveloperIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchDevelopersDeveloperIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PatchDevelopersDeveloperIdQueryParams;
}


export class PatchDevelopersDeveloperIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

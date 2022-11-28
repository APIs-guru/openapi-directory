import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchDeveloperAccountsDeveloperAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerAccountId" })
  developerAccountId: string;
}


export class PatchDeveloperAccountsDeveloperAccountIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class PatchDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchDeveloperAccountsDeveloperAccountIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PatchDeveloperAccountsDeveloperAccountIdQueryParams;
}


export class PatchDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

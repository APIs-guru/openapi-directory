import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchDeveloperAccountsDeveloperAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=developerAccountId" })
  developerAccountId: string;
}


export class PatchDeveloperAccountsDeveloperAccountIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class PatchDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchDeveloperAccountsDeveloperAccountIdPathParams;

  @Metadata()
  queryParams: PatchDeveloperAccountsDeveloperAccountIdQueryParams;
}


export class PatchDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

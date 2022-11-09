import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostDeveloperAccountsDeveloperAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=developerAccountId" })
  developerAccountId: string;
}


export class PostDeveloperAccountsDeveloperAccountIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class PostDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostDeveloperAccountsDeveloperAccountIdPathParams;

  @Metadata()
  queryParams: PostDeveloperAccountsDeveloperAccountIdQueryParams;
}


export class PostDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

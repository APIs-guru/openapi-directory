import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchDevelopersDeveloperIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;
}


export class PatchDevelopersDeveloperIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class PatchDevelopersDeveloperIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchDevelopersDeveloperIdPathParams;

  @Metadata()
  queryParams: PatchDevelopersDeveloperIdQueryParams;
}


export class PatchDevelopersDeveloperIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

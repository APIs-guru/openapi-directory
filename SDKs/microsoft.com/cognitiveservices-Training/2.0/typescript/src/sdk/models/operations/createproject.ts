import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domainId" })
  domainId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class CreateProjectHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class CreateProjectRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateProjectQueryParams;

  @Metadata()
  headers: CreateProjectHeaders;
}


export class CreateProjectResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  project?: shared.Project;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateProjectClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}


export class CreateProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classificationType" })
  classificationType?: CreateProjectClassificationTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class CreateProjectHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class CreateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateProjectQueryParams;

  @SpeakeasyMetadata()
  headers: CreateProjectHeaders;
}


export class CreateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  project?: shared.Project;

  @SpeakeasyMetadata()
  statusCode: number;
}

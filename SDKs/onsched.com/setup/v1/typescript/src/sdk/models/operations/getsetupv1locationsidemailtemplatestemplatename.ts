import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1LocationsIdEmailTemplatesTemplateNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=templateName" })
  templateName: string;
}


export class GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1LocationsIdEmailTemplatesTemplateNamePathParams;
}


export class GetSetupV1LocationsIdEmailTemplatesTemplateNameResponse extends SpeakeasyBase {
  @Metadata()
  contentResult?: shared.ContentResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

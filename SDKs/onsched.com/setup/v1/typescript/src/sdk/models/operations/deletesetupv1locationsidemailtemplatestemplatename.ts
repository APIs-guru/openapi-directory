import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1LocationsIdEmailTemplatesTemplateNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=templateName" })
  templateName: string;
}


export class DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1LocationsIdEmailTemplatesTemplateNamePathParams;
}


export class DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse extends SpeakeasyBase {
  @Metadata()
  contentResult?: shared.ContentResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

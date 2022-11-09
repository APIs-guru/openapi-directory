import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=templateName" })
  templateName: string;
}


export class GetSetupV1CompaniesEmailTemplatesTemplateNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams;
}


export class GetSetupV1CompaniesEmailTemplatesTemplateNameResponse extends SpeakeasyBase {
  @Metadata()
  contentResult?: shared.ContentResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

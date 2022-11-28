import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateName" })
  templateName: string;
}


export class GetSetupV1CompaniesEmailTemplatesTemplateNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams;
}


export class GetSetupV1CompaniesEmailTemplatesTemplateNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentResult?: shared.ContentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

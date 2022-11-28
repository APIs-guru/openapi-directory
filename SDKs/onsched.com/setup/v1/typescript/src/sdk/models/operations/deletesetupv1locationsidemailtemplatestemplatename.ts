import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSetupV1LocationsIdEmailTemplatesTemplateNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateName" })
  templateName: string;
}


export class DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSetupV1LocationsIdEmailTemplatesTemplateNamePathParams;
}


export class DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentResult?: shared.ContentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
